const express = require('express');
const router = express.Router();

const MainPage = async (_, res) => {
    const response = await fetch('http://localhost:8000/product');
    const productData = await response.json();
    const product = productData.products; 
    res.render('index', {product})
};

const ProductPage = async (_,res) => {
    const response = await fetch('http://localhost:8000/products/2');
    const productData = await response.json();
    const product = productData.product; 
    res.render('product', {product})
};

const CartPage = async (req, res) => {
    const response = await fetch("http:localhost:8000/product/cart")
    const cartdata =  await response.json();
    res.render('cart', {cartdata})
}

router.get("/login", (_, res) => {
    res.render('login',)
});

const RegisterPage = (req, res) =>{
    res.render('signup',);
}





router.get("/", MainPage);
router.get("/cart",  CartPage);
router.get("/products", ProductPage);
router.get("/account", RegisterPage);

module.exports = router
