const process = require('process');
const path = process.cwd() + '/database/db.js';
const db = require(path).db;
const dbProps = require(path).props;

module.exports = (function(req) {
  // Refresh DB state
  db.read();
  // done
  const [url, urlParams] = req.url.split('?');

  if (url.split('/').length === 4) {
    const [customerId] = url.split('/').slice(-1);
    const customers = db
      .get(dbProps.CUSTOMERS)
      .filter({ customer_id: Number(customerId) })
      .value();

    return JSON.parse(
      JSON.stringify({
        '@uri': 'http://api.cloud.com/data/getCustomer',
        items: customers
      })
    );
  }

  const queryParams = urlParams.split('&');
  let params = {};
  if (queryParams && queryParams.length) {
    queryParams.forEach(p => {
      const [key, value] = p.split('=');
      params[key] = value;
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
