const fs = require('fs');
const path = require('path');
const { dialog } = require('electron');
const serve = require('electron-serve');
const { decrypt } = require('./helpers');

const {
  BASE_URL,
  HOST,
  PORT,
} = require(
  path.resolve('config'),
);

const handleUpload = (mainWindow) => {
  dialog.showOpenDialog({
    filters: [
      { name: 'Password Files', extensions: ['evpm'] },
    ],
    properties: ['openFile'],
  })
  .then(({ canceled, filePaths }) => {
    if (canceled) {
      mainWindow.webContents.send('file-upload-cancel', {});

      return;
    }
    
    const [filePath] = filePaths;

    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        mainWindow.webContents.send('file-upload-read-failure', {});

        return;
      }

      const string = decrypt(data);

      mainWindow.webContents.send('file-upload-success', string);
    });
  })
  .catch(() => {
    mainWindow.webContents.send('file-upload-dialog-failure', {});
  });
};

const handleLoadURL = (mainWindow, isDev) => {
  if (isDev) {
    mainWindow.loadURL(`http://${HOST}:${PORT}${BASE_URL}`);
  } else {
    serve({
      directory: path.resolve('dist'),
    })(mainWindow);
  }
};

module.exports = {
  handleUpload,
  handleLoadURL,
};