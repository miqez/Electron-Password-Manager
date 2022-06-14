const path = require('path');
const { app, BrowserWindow } = require('electron');
const serve = require('electron-serve');

const loadURL = serve({ 
  directory: 'dist', 
});

let mainWindow;

const isDev = () => !app.isPackaged;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  });

  if (isDev()) {
    mainWindow.loadURL('http://localhost:8080/');
  } else {
    loadURL(mainWindow);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });
}

app.on('ready', () => {
  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      createWindow();
    }
  });

  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});