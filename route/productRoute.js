const express = require('express');

const {removeCart, addToCart,getCart, 
    product, getProducts} = require('../controller/productController');

const route = express.Router(); 

route.get("/", getProducts);
route.get("/:id", product);
route.get("/cart", getCart);
route.post("/cart/add/:id", addToCart);
route.delete("/cart/remove/:id", removeCart);

module.exports = route;  