const express = require('express');

const vaildateToken = require('../middleware/tokenHandler');
const {removeCart, addToCart,getCart, 
    product, getProducts} = require('../controller/productController');

const route = express.Router(); 

route.get("/", getProducts);
route.get("/p/:id", product);
route.get("/cart",vaildateToken, getCart);
route.post("/cart/add/:id",vaildateToken, addToCart);
route.delete("/cart/remove/:id",vaildateToken, removeCart);

module.exports = route;  