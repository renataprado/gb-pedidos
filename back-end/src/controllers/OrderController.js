const mongoose = require("mongoose");
const Order = require("../models/Order.js");
const HttpError = require('../models/http-error');

module.exports = {

  async getOrders(req, res) {
    let ordersStatus;
    let uniqueOrders
    try {
        ordersStatus = await Order.find();
        uniqueOrders = await Order.find().distinct('orderId');
      } catch (err) {
        const error = new HttpError(
          'Something went wrong, could not find a order.',
          500
        );
        return next(error);
      }
    
    
    let orders = uniqueOrders.map(uniqueOrder =>  {
      const orderId = uniqueOrder;
      const status = ordersStatus.filter(o => o.orderId == uniqueOrder).sort((a,b) => new Date(a.createAt) - new Date(b.createAt));
      const recentStatus = status.slice(-1).pop();
      return {orderId, recentStatus, status};
    })

    return res.json({orders});
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
