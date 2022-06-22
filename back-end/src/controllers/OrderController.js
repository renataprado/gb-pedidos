const mongoose = require("mongoose");
const Order = require("../models/Order.js");
const HttpError = require('../models/http-error');

const findOrderById = async (orderId) => {
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
  return order;
}

module.exports = {
  async getOrdersById (req, res, next){

    let uniqueOrders;
    try {
      uniqueOrders = await Order.find().distinct('orderId');
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not find a order.',
        500
      );
      return next(error);
    }
  
    if (!uniqueOrders) {
      const error = new HttpError(
        'Could not find a orders',
        404
      );
      return next(error);
    } else {
      const unresolvedPromises = uniqueOrders.map(orderId => findOrderById(orderId));
      const orders = await Promise.all(unresolvedPromises);
      res.json({ orders });
    }
  },

  async getOrderById (req, res, next){
    const orderId = req.params.oid;
  
    const order = await findOrderById(orderId);
  
    res.json({ order });
  },

  async getOrders(req, res) {
    const orders = await Order.find();
    return res.json(orders);
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
