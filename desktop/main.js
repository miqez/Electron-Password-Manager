require('dotenv').config();

const path = require('path');
const { NODE_ENV } = require(
  path.resolve('config'),
);
const reload = require('electron-reload');
const { app, BrowserWindow, ipcMain } = require('electron');
const { handleUpload, handleLoadURL } = require('./handlers');

const isDev = () => !app.isPackaged && NODE_ENV === 'development';

let mainWindow;

if (isDev()) {
  reload(__dirname, {
    electron: path.resolve('node_modules', '.bin', 'electron.cmd'),
    hardResetMethod: 'exit',
  });
}

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.resolve('public', 'favicon.ico'),
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  });

  handleLoadURL(mainWindow, isDev());

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());
}

app.on('ready', () => {
  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      createWindow();
    }
  });

  ipcMain.on('file-upload', () => {
    handleUpload(mainWindow);
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});