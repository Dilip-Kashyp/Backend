const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session')

const {createUser, getUser } = require('../controller/userController')

const route = express.Router()
route.use(bodyParser.urlencoded({ extended: true }));
route.use(bodyParser.json());

route.use(session({
    secret : 'aabra ka daabra',
    resave : false,
    saveUninitialized : true
}));

route.post("/login", getUser);
route.post("/register", createUser);

module.exports = route;