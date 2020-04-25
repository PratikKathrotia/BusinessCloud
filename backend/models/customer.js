const mongoose = require('mongoose');
const orderSchema = require('./order');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  customer_name: { type: String, required: true },
  customer_org: { type: String, required: true },
  balance: { type: Number, required: true },
  customer_email: { type: String, required: true },
  customer_phone: { type: String, required: true },
  customer_address: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
  },
  created: { type: Date, required: true },
  modified: { type: Date, required: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  customer_orders: [orderSchema],
});

module.exports = customerSchema;
