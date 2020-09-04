const express = require('express'); //adiciona o express

app = express(); 

app.get('/', (req, res) => {
    res.send('Hello Elder! ;)');
});

app.listen(3001); /* inicia o servidor e 'ouve' a porta 3001 do nosso navegador */