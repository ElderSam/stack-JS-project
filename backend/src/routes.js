const express = require('express');
const routes = express.Router();

const ProductControler = require('./controllers/ProductController');
// Primeira rota
routes.get('/products', ProductControler.index);
routes.post('/products', ProductControler.store);

module.exports = routes;
