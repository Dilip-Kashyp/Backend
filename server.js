const express = require('express');
const dotenv = require('dotenv').config();
const productRoute = require('./route/productRoute')
const userRoute = require('./route/userRoute')

const app = express();
const port = process.env.PORT || 8000

app.use("/product", productRoute)
app.use("/user", userRoute)


app.listen(port, () => {
    console.log(`Server running on port --> http://localhost:${port}/`);
});