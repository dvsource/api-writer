const readSheet = require('./api/sheet');
const config = require('./config');

const processAPIs = (data) => {
  let rootSheet = null;
  const otherSheets = new Map();
  if (data && data.length) {
    data.forEach((item) => {
      if (item.properties.sheetId) {
        otherSheets.set(item.properties.sheetId, {
          rowData: item.data[0].rowData,
          properties: item.properties,
        });
      } else {
        rootSheet = item.data[0].rowData;
      }
    });
  }

  if (rootSheet && rootSheet.length) {
    rootSheet.forEach((item) => {
      if (item.values) {
        if (item.values.length === 1) {
        } else if (item.values.length === 4) {
          const [method, url] = item.values;
          if (url.hyperlink) {
            const sheetId = +url.hyperlink.replace(/^\D+/g, '');
            if (otherSheets.has(sheetId)) {
              console.log(
                `${sheetId} - ${method.formattedValue}:${
                  url.formattedValue
                } | ${otherSheets.get(sheetId).properties.title}`
              );
            }
          }
        }
      }
    });
  }

  // console.log(rootSheet);
  // console.log(otherSheets);
};

const _processAPIs = (data) => {
  // const apis = [];
  // let serviceName = null;
  // let endpoints = [];
  // data.forEach((item) => {
  //   if (item.length === 1) {
  //     // service name
  //     if (serviceName !== null) {
  //       apis.push({ serviceName, endpoints });
  //       serviceName = null;
  //       endpoints = [];
  //     }
  //     serviceName = item[0];
  //   }
  //   if (item.length === 2) {
  //     if (['GET', 'POST', 'PUT', 'DELETE'].includes(item[0])) {
  //       endpoints.push({ method: item[0], url: item[1], spec: null });
  //     }
  //   }
  // });
  // console.log(apis);
};

readSheet(
  config.GOOGLE_SHEET.ROOT_SHEET_ID,
  `${config.GOOGLE_SHEET.DEFAULT_SHEET_NAME}!${config.GOOGLE_SHEET.DEFAULT_SHEET_RANGE}`,
  processAPIs
);
