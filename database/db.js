const process = require('process');
const path = process.cwd() + '/database/db.json';
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(path);
const db = low(adapter);

module.exports = (function() {
  return {
    db: db,
    props: {
      ACCOUNTS: 'accounts',
      USERS: 'users',
      CUSTOMERS: 'customers'
    }
  };
})();
