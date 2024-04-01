const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session')
const Users = require('../config/userDB');
const router = express.Router();

router.use(cors());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.use(session({
    secret : 'aabra ka daabra',
    resave : false,
    saveUninitialized : true
}));


const NotFound = (_, res) =>{
    res.render('notfound',);
}

const MainPage = async (req, res) => {
    const response = await fetch('http://localhost:8000/product');
    const productData = await response.json();
    const product = productData.products; 
    const sessions = req.session.user
    res.render('index', {product, sessions})
};

const ProductPage = async (req ,res) => {
    const id = 2;
    console.log(id)
    const response = await fetch(`http://localhost:8000/product/${id}`);
    const productData = await response.json();
    const product = productData.product; 
    res.render('product', {product})
};

const CartPage = async (_, res) => {
    const response = await fetch("http:localhost:8000/product/cart")
    const cartdata =  await response.json();
    res.render('cart', {cartdata})
}

const RegisterPage = (_, res) =>{
    res.render('signup',);
}

const LoginPage = async (_, res) => {
    res.render('login')
};

const LoginPageHendler = async (req, res) =>{
    const {email, password} = req.body;
    const response = await fetch(`http://localhost:8000/login`, {
        method : "POST",
        body : JSON.stringify({
            email : email,
            password : password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const  user = await response.json()
    console.log(user.User.email, user.User.password)
    if(email == user.User.email && password == user.User.password){
        req.session.user = user.User;
        res.json({ redirectUrl: '/' });
    }
    else{
        console.log("he")
        res.json({ redirectUrl: '' });
    }
}



router.get("/", MainPage);
router.get("/cart",  CartPage);
router.get("/login", LoginPage);
router.post("/login", LoginPageHendler);
router.get("/account", RegisterPage);
router.get("/products", ProductPage);

module.exports = {router, NotFound}
