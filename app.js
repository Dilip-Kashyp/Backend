const express = require('express');
const products = require('./ProductsDB')
const app = express();

const cart = [];

app.get("/ping", (_, res) => {
    res.json({
        "ping" : "pong",
    })
});


const GetAllProduct = (_, res) => {
    const product = products.map(product => product );
    if(product.status == 200){
        res.json({
            "status" : 200,
            "product" : product,
        });
    }
    else{
        res.status(400).json({
            "status" : 400,
            "massage" : "Product not Found"
        })
    }
};

const GetProduct = (req,res) => {
    const id = req.params.id;
    const getproduct = products.filter(products => products.id == id);
    if(getproduct.status == 200){
        res.json({
            "status" : 200,
            "product" : getproduct,
        });
    }
    else{
        res.status(400).json({
            "status" : 400,
            "massage" : "Product not Found"
        })
    }   
}

const GetProductBy = (req, res) => {
    const category = req.params.category;
    const value = req.params.value;
    const product = products.filter(products => products[category] == value);
    if(product.status == 200){
        res.json({
            "status" : 200,
            "product" : product,
        });
    }
    else{
        res.status(400).json({
            "status" : 400,
            "massage" : "Product not Found"
        })
    }
};

const GetCart = (_, res) => {
    let total = 0;
    cart.forEach(product => {
        total += product.price;
    });

    if(cart.length !== 0){
        res.json({
            "status" : 200,
            'Total Price' : total,
            "cart items " : cart,    
        });
    }
    else{
        res.status(400).json({
            "status" : 400,
            "cart" : "No product found"
        });
    };
};

const AddToCart = (req, res) => {
    const id = req.params.id;
    const product = products.find(product => product.id == id);
    if(product){
        cart.push(product);
        res.json({
            "status" : 200,
             "message" : "Product added"
        })
    }
    else{
        res.status(400).json({
            "status" : 400,
            "message" : "Product not found"
        });
    };
};

const RemoveCart = (req, res) => {
    const id = req.params.id;
    const product = cart.findIndex(product => product.id == id);
    if(product  !== -1){
        cart.splice(product, 1);
        res.json({
            "status" : 200,
            "message" : "Product Removed from cart"
        })
    }
    else{
        res.status(400).json({
            "status" : 400,
            "message" : "Product not found in cart"
        })
    }
        
    

}


app.get('/products', GetAllProduct);
app.get('/products/:id', GetProduct);
app.get("/products/category/:category/:value", GetProductBy);
app.get("/product/cart", GetCart);
app.get("/product/cart/add/:id", AddToCart);
app.get("/product/cart/remove/:id", RemoveCart);

module.exports = app;    