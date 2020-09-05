const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) {
        const products = await Product.find(); //select all products in MongoDB
        
        return res.json(products);
    },
};