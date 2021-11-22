// import '@babel/polyfill';
const {
  app: app,
  ipcMain: ipcMain,
  dialog: dialog,
  powerSaveBlocker: powerSaveBlocker,
  powerMonitor: powerMonitor,
} = require('electron');
const { autoUpdater: autoUpdater } = require('electron-updater');
const Store = require('electron-store');
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const isOnline = require('is-online');
const log = require('electron-log');
const path = require('path');
const fs = require('fs');
//import menuTemplate from './electron-app/menu-template';
const { createCommons: createCommons } = require('simport');
const WindowManager = require('./electron-app/WindowManager');
const launchServer = require('./server-cli');
const pkg = require('./package.json');
//import './sentryInit';
const { parseAndReturnGCode: parseAndReturnGCode } = require('./electron-app/RecentFiles');

const { __filename, __dirname, require } = createCommons(import.meta.url);

let windowManager = null;
let powerSaverId = null;

const main = () => {
  // https://github.com/electron/electron/blob/master/docs/api/app.md#apprequestsingleinstancelock
  const gotSingleInstanceLock = app.requestSingleInstanceLock();
  const shouldQuitImmediately = !gotSingleInstanceLock;

  let prevDirectory = '';

  if (shouldQuitImmediately) {
    app.quit();
    return;
  }

  app.on('second-instance', (event, commandLine, workingDirectory) => {
    // Someone tried to run a second instance, we should focus our window.
    if (!windowManager) {
      return;
    }

    const window = windowManager.getWindow();
    if (window) {
      if (window.isMinimized()) {
        window.restore();
      }
      window.focus();
    }
  });

  const store = new Store();

  // Create the user data directory if it does not exist
  const userData = app.getPath('userData');
  mkdirp.sync(userData);

  app.whenReady().then(async () => {
    try {
      windowManager = new WindowManager();
      // Create and show splash before server starts
      const splashScreen = windowManager.createSplashScreen({
        width: 500,
        height: 400,
        show: false,
        frame: false,
      });
      splashScreen.loadFile(path.join(__dirname, 'app/assets/Splashscreen.gif'));
      splashScreen.webContents.on('did-finish-load', () => {
        splashScreen.show();
      });

      splashScreen.on('show', () => {
        splashScreen.focus();
      });

      const { address, port, mountPoints } = await launchServer();
      if (!(address && port)) {
        log.error('Unable to start the server at ' + chalk.cyan(`http://${address}:${port}`));
        return;
      }

      /*if (BUILD_DEV) {
                const menu = Menu.buildFromTemplate(menuTemplate({ address, port, mountPoints }));
                Menu.setApplicationMenu(menu);
            }*/

      const url = `http://${address}:${port}`;
      // The bounds is a rectangle object with the following properties:
      // * `x` Number - The x coordinate of the origin of the rectangle.
      // * `y` Number - The y coordinate of the origin of the rectangle.
      // * `width` Number - The width of the rectangle.
      // * `height` Number - The height of the rectangle.
      const bounds = {
        width: 1140, // Defaults to 1140
        height: 768, // Defaults to 768
        minWidth: 1140,
        minHeight: 768,
        ...store.get('bounds'),
      };
      const options = {
        ...bounds,
        title: `${pkg.name} ${pkg.version}`,
      };
      const window = windowManager.openWindow(url, options, splashScreen);

      // Power saver - display sleep higher precedence over app suspension
      powerSaverId = powerSaveBlocker.start('prevent-display-sleep');
      log.info(`Result of powerSaveBlocker: ${powerSaveBlocker.isStarted(powerSaverId)}`);
      powerMonitor.on('lock-screen', () => {
        powerSaveBlocker.start('prevent-display-sleep');
        log.info('Prevented sleep');
      });
      powerMonitor.on('suspend', () => {
        powerSaveBlocker.start('prevent-app-suspension');
        log.info('Prevented suspension');
      });

      // Save window size and position
      window.on('close', () => {
        store.set('bounds', window.getBounds());
      });

      autoUpdater.on('update-available', (info) => {
        window.webContents.send('update_available', info);
      });

      autoUpdater.on('error', (err) => {
        window.webContents.send('updated_error', err);
      });

      ipcMain.once('restart_app', async () => {
        await autoUpdater.downloadUpdate();
        autoUpdater.quitAndInstall(false, true);
      });

      ipcMain.on('load-recent-file', async (msg, recentFile) => {
        const fileMetadata = await parseAndReturnGCode(recentFile);
        window.webContents.send('loaded-recent-file', fileMetadata);
      });

      ipcMain.on('open-upload-dialog', async () => {
        try {
          let additionalOptions = {};

          if (prevDirectory) {
            log.info(`Found previous directory ${prevDirectory}`);
            additionalOptions.defaultPath = prevDirectory;
          }
          const file = await dialog.showOpenDialog(window, {
            properties: ['openFile'],
            filters: [
              { name: 'GCode Files', extensions: ['gcode', 'gc', 'nc', 'tap', 'cnc'] },
              { name: 'All Files', extensions: ['*'] },
            ],
          });

          if (!file) {
            log.info('No file found');
            return;
          }
          if (file.canceled) {
            return;
          }

          const FULL_FILE_PATH = file.filePaths[0];
          const getFileInformation = (file) => {
            const { base, dir } = path.parse(file);
            return [dir, base];
          };

          const [filePath, fileName] = getFileInformation(FULL_FILE_PATH);

          prevDirectory = filePath; // set previous directory

          fs.readFile(FULL_FILE_PATH, 'utf8', (err, data) => {
            if (err) {
              log.error(`Error in readFile: ${err}`);
              return;
            }

            const { size } = fs.statSync(FULL_FILE_PATH);
            window.webContents.send('returned-upload-dialog-data', {
              data,
              size,
              name: fileName,
              path: FULL_FILE_PATH,
            });
          });
        } catch (e) {
          log.error(`Caught error in listener - ${e}`);
        }
      });
    } catch (err) {
      log.error(err);
    }
    //Check for available updates at end to avoid try-catch failing to load events
    const internetConnectivity = await isOnline();
    if (internetConnectivity) {
      autoUpdater.autoDownload = false; // We don't want to force update but will prompt until it is updated
      await autoUpdater.checkForUpdates();
    }
  });
};

main();
