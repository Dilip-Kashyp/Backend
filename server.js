const express = require('express');
const cors = require('cors');
const productRoute = require('./route/productRoute')
const userRoute = require('./route/userRoute')

const app = express();
const port = 8000;

app.use("/product", productRoute)
app.use("/user", userRoute)
app.use(cors());

app.listen(port, () => {
    console.log(`Server running on port --> http://localhost:${port}/`);
});