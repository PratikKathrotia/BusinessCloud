const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const accountSchema = new Schema({
  email: { type: String, required: true, unique: true },
  account_currency: { type: String, required: true, default: 'USD' },
  account_timezone: { type: String, required: true, default: 'America/Los_Angeles' },
  account_name: { type: String, required: true },
  account_roles: [{ type: String, required: true }],
  account_balance: { type: Number, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = accountSchema;
