import { app, shell } from 'electron';
import trimStart from 'lodash/trimStart';

// https://github.com/electron/electron/blob/master/docs/api/menu/
export default (options) => {
  // mountPoints = [
  //   {
  //     route: '/widget',
  //     target: '~+/widget'
  //   }
  // ]
  const { address, port, mountPoints = [] } = { ...options };
  let menuItems = [];

  if (mountPoints.length > 0) {
    menuItems = [{ type: 'separator' }, { label: 'Mount Points', enabled: false }].concat(
      mountPoints.map((mountPoint) => ({
        label: `  ${mountPoint.route}`,
        click: () => {
          const routePath = trimStart(mountPoint.route, '/');
          const url = `http://${address}:${port}/${routePath}`;
          shell.openExternal(url);
        },
      }))
    );
  }

  const template = [
    {
      label: app.getName(),
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services', submenu: [] },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideothers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' },
      ],
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'pasteandmatchstyle' },
        { role: 'delete' },
        { role: 'selectall' },
        { type: 'separator' },
        {
          label: 'Speech',
          submenu: [{ role: 'startspeaking' }, { role: 'stopspeaking' }],
        },
      ],
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forcereload' },
        { role: 'toggledevtools' },
        { type: 'separator' },
        { role: 'resetzoom' },
        { role: 'zoomin' },
        { role: 'zoomout' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
        { type: 'separator' },
        {
          label: 'View In Browser',
          click: () => {
            const url = `http://${address}:${port}`;
            shell.openExternal(url);
          },
        },
        ...menuItems,
      ],
    },
    {
      role: 'window',
      submenu: [{ role: 'close' }, { role: 'minimize' }, { role: 'zoom' }, { type: 'separator' }, { role: 'front' }],
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'Learn More',
          click: () => {
            shell.openExternal('https://github.com/Domush/cncjs4marlin#readme');
          },
        },
      ],
    },
  ];

  return template;
};
