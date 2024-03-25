const path = require('path');
const express = require('express');
const router = require('./route/app');
const app = express();
const port = 5500;


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', router);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.listen(port, () => {
    console.log(`page running on port --> http://localhost:${port}/`);
});
