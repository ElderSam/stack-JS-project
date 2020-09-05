const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) { // ----------- READ ALL --------------- 
        const { page = 1 } = req.query;
        const products = await Product.paginate({}, { page, limit: 10 }); //select all products in MongoDB
        
        return res.json(products);
    },
    
    async show(req, res) { // ----------- READ BY ID --------------- 
        const product = await Product.findById(req.params.id);
        
        return res.json(product);
    },

    async store(req, res) { //--------------- CREATE ---------------
        // Criação
        const product = await Product.create(req.body);

        return res.json(product);
    },

    async update(req, res) { //--------------- UPDATE ---------------

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true //para retornar o registro/Document atualizado
        });

        return res.json(product)
    },

    async destroy(req, res) { //--------------- DELETE ---------------
        await Product.findByIdAndRemove(req.params.id);

        return res.send(); //mensagem de sucesso
    }

};