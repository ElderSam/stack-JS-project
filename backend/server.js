const express = require('express'); //adiciona o express
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o App
app = express(); 

let resConnectionDB;

var mongoDB = 'mongodb://localhost:27017/nodeapi';
// Inicia o DB
mongoose.connect(
    mongoDB,
    { useNewUrlParser: true,
      useUnifiedTopology: true }
)

// Get the default connection
var db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error :('));

requireDir('./src/models');

const Product = mongoose.model('Product');

// Primeira rota
app.get('/', (req, res) => {
    //quando acessar http://localhost:3001 ou dar um refresh na página, então será inserido um novo registro
    Product.create({
        title: 'Node.js',
        description: 'Build your back-end in JavaScript',
        url: 'rocketseat.com'
    })

    return res.send('Hello World!');
});

app.listen(3001); /* inicia o servidor e 'ouve' a porta 3001 do nosso navegador */