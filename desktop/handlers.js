const path = require('path');
const serve = require('electron-serve');

const {
  BASE_URL,
  HOST,
  PORT,
} = require(
  path.resolve('config'),
);

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
  handleLoadURL,
};