const path = require('path');
const express = require('express');
const {router, NotFound} = require('./route/app');
const app = express();
const port = 5500;

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('*', NotFound)

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`page running on port --> http://localhost:${port}/`);
});
