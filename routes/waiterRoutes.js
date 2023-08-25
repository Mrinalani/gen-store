const express = require('express');

const WaiterController = require('../controller/waiterController')

const router = express.Router();


router.post('/addOrders/inDB',WaiterController.postOrders)

router.get('/getOrders/FromDB',WaiterController.getOrders)

router.delete('/DeleteOrders/FromDB/:orderId', WaiterController.deleteOrders)

module.exports = router