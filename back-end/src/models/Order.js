const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  createAt: { type: Date,  default: Date.now()},
  orderId: { type: String, required: true },
  value: { type: Number, required: true} ,
  name: { type: String, required: true}
});

module.exports = mongoose.model('Order', orderSchema);