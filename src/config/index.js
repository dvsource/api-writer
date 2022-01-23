const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../../.env') });

module.exports = {
  GOOGLE_SHEET: {
    ROOT_SHEET_ID: process.env.ROOT_SHEET_ID,
    DEFAULT_SHEET_NAME: process.env.DEFAULT_SHEET_NAME,
    DEFAULT_SHEET_RANGE: process.env.DEFAULT_SHEET_RANGE,
  },
};
