const path = require('path');

const BASE_URL = process.env.VUE_APP_BASE_URL || '/';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const NODE_ENV = process.env.NODE_ENV || 'development';
const INIT_CWD = process.env.INIT_CWD || path.resolve('.');
const IS_ELECTRON = process.env.IS_ELECTRON || false;
const SECRET = process.env.SECRET || 'QTKBDbWdEvgjxCoQHSzGnIiNhf9OKP86';

module.exports = {
  BASE_URL,
  HOST,
  PORT,
  NODE_ENV,
  INIT_CWD,
  IS_ELECTRON,
  SECRET,
};