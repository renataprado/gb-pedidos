const express = require ('express');
const router = express.Router();
const orderController = require("../controllers/OrderController");

router.get("/", orderController.index);
router.post("/", orderController.create);
router.post("/many", orderController.createMany);

module.exports = router;