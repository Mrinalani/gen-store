const path = require('path')

const express = require('express')

const StoreController = require('../controller/storeController')

const router = express.Router();

router.post('/addInStore/items',StoreController.postAddStoreDetails)

router.get('/getStoredProduct/fromDB',StoreController.getStoredProduct)

router.put('/putreq/inDB/:ProductId',StoreController.updateProductInDB)

module.exports = router;
