const express = require('express');
const bodyParser = require('body-parser');

const {register, login, currentUser } = require('../controller/userController');
const vaildateToken = require('../middleware/tokenHandler');

const route = express.Router()
route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());

route.get("/current",vaildateToken, currentUser)
route.post("/login", login);
route.post("/register", register);

module.exports = route;