const mongoose = require("mongoose");
const Order = require("../models/Order.js");
const HttpError = require('../models/http-error');

module.exports = {

  async getOrderById (req, res, next){
    const orderId = req.params.pid;
  
    let order;
    try {
      order = await Order.find({orderId});
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not find a order.',
        500
      );
      return next(error);
    }
  
    if (!order) {
      const error = new HttpError(
        'Could not find a order for the provided id.',
        404
      );
      return next(error);
    }
  
    res.json({ order });
  },

  async getOrders(req, res) {
    const orders = await Order.find();
    return res.status(200).json(orders);
  },

  // Save new order
  async save(req, res) {
    const { createAt, orderId, value, name } = req.body;
    const createdOrder = new Order({
      createAt,
      orderId,
      value,
      name,
    });

    try {
      await createdOrder.save();
    } catch (err) {
      res.status(500).json(err.message);
    }
    res.status(201).json({ order: createdOrder });
  },

  //Create
  async create(req, res) {
    let orders = req.body;
    Order.create(orders)
      .then((results) => res.status(201).json(results))
      .catch((err) => res.status(500).json(err));
  }
};
