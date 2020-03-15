const process = require('process');
const path = process.cwd() + '/database/db.js';
const db = require(path).db;
const dbProps = require(path).props;

module.exports = (function(req) {
  const userId = parseInt(req.url.split('?')[1].split('=')[1]);
  let env = {};
  const user = db
    .get(dbProps.USERS)
    .filter({ user_id: userId })
    .value()[0];

  if (user && typeof user !== 'undefined') {
    const duplUser = JSON.parse(JSON.stringify(user));
    delete duplUser.password;
    delete duplUser.first_name;
    delete duplUser.last_name;

    const account = db
      .get(dbProps.ACCOUNTS)
      .filter({ account_id: duplUser.account_id })
      .value()[0];

    env = {
      ...duplUser,
      ...account
    };
  }

  return JSON.parse(JSON.stringify(env));
})(request);
