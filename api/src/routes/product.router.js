const express = require('express');
const productApi = require('../api/product.api.js');
const router = express.Router();

router.post('/create_product', productApi.createProduct)
router.get('/list_products', productApi.getProducts);


module.exports = router;