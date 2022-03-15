const express = require('express')
const router = express.Router();
const product = require('../routes/product.router');
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 router.use('/product', product);




exports = router;