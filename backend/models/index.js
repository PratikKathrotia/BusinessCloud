const mongoose = require('mongoose');
const accountSchema = require('./account');
const userSchema = require('./user');
const customerSchema = require('./customer');
const orderSchema = require('./order');

module.exports = {
  Account: mongoose.model('Account', accountSchema),
  User: mongoose.model('User', userSchema),
  Customer: mongoose.model('Customer', customerSchema),
  Order: mongoose.model('Order', orderSchema),
};
