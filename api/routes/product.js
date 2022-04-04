const express = require('express');
const productController = require("../app/controllers/product.js");
const router = express.Router();

router.post('/create_product', productController.createProduct);
router.get('/list_products', productController.getProducts);

module.exports = router;