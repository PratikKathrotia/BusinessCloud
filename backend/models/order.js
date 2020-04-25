const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  order_items: [
    {
      item_name: { type: String, required: true },
      item_price: { type: Number, required: true },
    },
  ],
  order_date: { type: String, required: true },
});

module.exports = orderSchema;
