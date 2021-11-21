import path from 'path';
import fs from 'fs/promises';
import fsBase from 'fs';

const getFileInformation = (file) => {
  const fileName = path.parse(file).base;
  const filePath = path.parse(file).dir;
  return [filePath, fileName];
};

const fileExistsAtPath = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch (e) {
    return false;
  }
};

export const parseAndReturnGCode = async ({ filePath }) => {
  const [fileDir, fileName] = getFileInformation(filePath);

  try {
    const fileExists = await fileExistsAtPath(filePath);
    if (!fileExists) {
      return null; // TODO: Handle null as FILENOTFOUND error
    }

    const { size } = fsBase.statSync(filePath);

    const data = await fs.readFile(filePath, 'utf-8');
    return {
      result: data,
      size: size,
      name: fileName,
      dir: fileDir,
      fullPath: filePath,
    };
  } catch (err) {
    throw err;
  }
};
