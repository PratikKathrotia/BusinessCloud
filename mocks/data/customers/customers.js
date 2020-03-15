const process = require('process');
const path = process.cwd() + '/database/db.js';
const db = require(path).db;
const dbProps = require(path).props;

module.exports = (function(req) {
  const queryParams = req.url.split('?')[1].split('&');
  let params = {};
  if (queryParams && queryParams.length) {
    queryParams.forEach(p => {
      const a = p.split('=');
      params[a[0]] = a[1];
    });
  }

  var customers = db
    .get(dbProps.CUSTOMERS)
    .filter({ user_id: Number(params.userId) })
    .value();

  return JSON.parse(
    JSON.stringify({
      '@uri': 'http://api.cloud.com/data/customers',
      items: customers,
      paging: {
        limit: Number(params.limit || 25),
        offset: Number(params.offset || 0),
        totalRows: customers.length
      }
    })
  );
})(request);
