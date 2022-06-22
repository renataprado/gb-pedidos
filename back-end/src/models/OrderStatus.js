const mongoose = require('mongoose');

const orderStatusSchema = new mongoose.Schema({
  createAt: { type: Date,  default: Date.now()},
  orderId: { type: String, required: true },
  value: { type: Number, required: true} ,
  name: { type: String, required: true}
});

module.exports = mongoose.model('OrderStatus', orderStatusSchema);