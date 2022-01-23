const readSheet = require('./api/sheet');
const config = require('./config');

readSheet(
  config.GOOGLE_SHEET.ROOT_SHEET_ID,
  `${config.GOOGLE_SHEET.DEFAULT_SHEET_NAME}!${config.GOOGLE_SHEET.DEFAULT_SHEET_RANGE}`,
  console.log
);
