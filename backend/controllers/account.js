const Models = require('../models');
const Account = Models.Account;

exports.createAccount = (req, res, next) => {
  const payload = req.body;
  console.log(payload);
  res.status(200).json({
    message: 'Account is created',
  });
};
