const mongoose = require("mongoose");
const Order = require("../models/Order.js");

module.exports = {
  async index(req, res) {
    const orders = await Order.find();
    return res.status(200).json(orders);
  },

  async create(req, res) {
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

  async createMany(req, res) {
    let arr = req.body;
    Order.create(arr)
      .then((results) => res.status(201).json(results))
      .catch((err) => res.status(500).json(err));
  }
};
