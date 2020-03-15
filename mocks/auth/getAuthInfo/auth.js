const process = require('process');
const path = process.cwd() + '/database/db.js';
const db = require(path).db;
const dbProps = require(path).props;
const Buffer = require('buffer').Buffer;

module.exports = (function(req) {
  const enckey = req.url.split('?')[1].split('=')[1];
  const decKey = new Buffer(enckey, 'base64');
  const password = decKey.toString().split(';')[1];
  const email = decKey.toString().split(';')[0];

  const user = db
    .get(dbProps.USERS)
    .filter({ email: email, password: password })
    .value()[0];
  console.log(user);
  return user && typeof user !== 'undefined'
    ? JSON.parse(
        JSON.stringify({
          '@uri': 'http://api.cloud.com/auth/getAuthInfo',
          account: user.account_id,
          user: user.user_id,
          success: true
        })
      )
    : JSON.parse(
        JSON.stringify({
          '@uri': 'http://api.cloud.com/auth/getAuthInfo',
          success: false
        })
      );
})(request);
