const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const products = require('../resource/ProductsDB')
const Users = require('../resource/UserDB')
const cart = require('../resource/cart')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Product = (req,res) => {
    const id = req.params.id;
    const getproduct = products.filter(products => products.id == id);
    if(getproduct){
        res.status(200).json({
            "product" : getproduct,
        });
    }
    else{
        res.status(404).json({
            "message" : "product not found"
        })
    }   
};

const GetProductBy = (req, res) => {
    const category = req.query.category; 
    const value = req.query.value; 
    console.log(category, value)

    const product = products.filter(product => product[category] === value);

    if(product){ 
        res.status(200).json({
            "products" : product, 
        });
    }
    else{
        res.status(404).json({
            "message" : "No products found" 
        });
    }
};

const GetCart = (_, res) => {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });

    if(cart.length !== 0){
        res.status(200).json({
            "total" : total,
            "items" : cart,    
        });
    }
    else{
        res.status(404).json({
            "message" : "no product found"
        });
    };
};

const AddToCart = (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id == id);
    if(product){
        cart.push(product);
        res.status(201).json({
             "message" : "product added"
        })
    }
    else{
        res.status(400).json({
            "message" : "product not found"
        });
    };
};

const RemoveCart = (req, res) => {
    const id = req.params.id;
    const product = cart.findIndex(product => product.id == id);
    if(product  !== -1){
        cart.splice(product, 1);
        res.status(200).json({
            "message" : "product removed from cart"
        })
    }
    else{
        res.status(404).json({
            "message" : "product not found in cart"
        })
    }       
};

const GetUser = (req, res) => {
    const {email,password} = req.body;
    const getuser = Users.find(User => User.email == email);
    if(getuser){
        res.json({
            "message" : `user found with ${email} email`,
            "User" : getuser,
        })
    }
    else{
        res.json({
            "message" : `user not found with ${email} emali`,
            "User" : '',
        })
    }
} 

const CreateUser = (req, res) => {
    const { name, email, password } = req.body;
    const user = {
        "name" : name,
        "email" : email,
        "password" : password,
    }
    Users.push(user);
    res.send(`Form submitted successfully!, ${user}`);
}

app.get("/product", GetProductBy);
app.get("/products/:id", Product);
app.get("/product/cart", GetCart);
app.post("/login", GetUser);
app.post("/account", CreateUser);
app.post("/product/cart/add/:id", AddToCart);
app.post("/product/cart/remove/:id", RemoveCart);

module.exports = app;  