const readSheet = require('./api/sheet');

readSheet('<SHEET_ID>', '<RANGE>', (res) => {
  console.log(res);
});
