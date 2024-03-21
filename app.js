const express = require('express');
const products = require('./ProductsDB')
const app = express();

const cart = [];

app.get("/ping", (_, res) => {
    res.status(200).json({
        "ping" : "pong",
    })
});


const GetAllProduct = (_, res) => {
    const product = products.map(product => product );
    if(product.status == 200){
        res.status(200).json({
            "product" : product,
        });
    }
    else{
        res.status(404).json({
            "message" : "product not found"
        })
    }
};

const GetProduct = (req,res) => {
    const id = req.params.id;
    const getproduct = products.filter(products => products.id == id);
    if(getproduct.status == 200){
        res.status(200).json({
            "product" : getproduct,
        });
    }
    else{
        res.status(404).json({
            "message" : "product not foun"
        })
    }   
}

const GetProductBy = (req, res) => {
    const category = req.query.category; 
    const value = req.query.value; 
    console.log(category, value)

    const product = products.filter(product => product[category] === value);

    if(product.length > 0){ 
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
}


app.get('/products', GetAllProduct);
app.get('/products/:id', GetProduct);
app.get("/product", GetProductBy);
app.get("/product/cart", GetCart);
app.get("/product/cart/add/:id", AddToCart);
app.get("/product/cart/remove/:id", RemoveCart);

module.exports = app;       