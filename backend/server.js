const express = require('express'); //adiciona o express
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Inicia o App
app = express(); 
app.use(express.json()); //permite receber informações em JSON

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

//recebe todo tipo de requisição
app.use('/api', require('./src/routes'))

app.listen(3001); /* inicia o servidor e 'ouve' a porta 3001 do nosso navegador */