const products = require('../config/ProductsDB')
const cart = require('../config/cart')

const getProducts = (req, res) => {
    res.json({
        products
    })
}

const product  = (req,res) => {
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

const getproduct = (req, res) => {
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

const getCart = (req, res) => {
    const userCart = cart.filter(item => item.user_id === req.user.id);

    if (userCart) {
        res.status(200).json({
            items: userCart
        });
    } else {
        res.status(404).json({
            message: "No cart found for the user"
        });
    }
};


const addToCart = (req, res) => {
    const id = req.params.id;
    const product = products.find(items => items.id == id);
    if(product){
        product.user_id = req.user.id;
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

const removeCart = (req, res) => {
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


module.exports = { removeCart, addToCart, getCart, product, getProducts}