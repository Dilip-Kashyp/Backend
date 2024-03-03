const express = require('express');
const products = require('./ProductsDB')
const app = express();


app.get("/ping", (_, res) => {
    res.json({
        "ping" : "pong",
    })
});


const GetAllProduct = (_, res) => {
    const product = products.map(product => product );
    res.json({
        "status" : 200,
        "product" : product,
    });
};

const GetProduct = (req,res) => {
    const id = req.params.id;
    const getproduct = products.filter(products => products.id == id);
    res.json({
        "status" : 200,
        "product" : getproduct,
    });
}

const GetProductBy = (req, res) => {
    const category = req.params.category;
    const value = req.params.value;
    const product = products.filter(products => products[category] == value);
    res.json({
        "status" : 200,
        "product" : product,
    });
};

app.get('/products', GetAllProduct);
app.get('/products/:id', GetProduct);
app.get("/products/category/:category/:value", GetProductBy)

module.exports = app;   