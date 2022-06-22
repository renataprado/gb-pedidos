const express = require ('express');
const router = express.Router();
const orderController = require("../controllers/OrderController");

//router.get("/", orderController.getOrders);
router.get("/", orderController.getOrdersById);
router.get('/:pid', orderController.getOrderById);
router.post("/", orderController.save);
router.post("/create", orderController.create);

module.exports = router;