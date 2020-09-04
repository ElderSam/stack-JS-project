Node.js (back-end);

Iniciando o projeto Node.js do zero:

# Iniciar Projeto; 
$ npm init -y
/*cria um arquivos package.json que diz como o nosso projeto deve se comportar, mas principalmente guarda informações sobre dependências adicionadas*/

# Instalar express;
$ npm install express
/*instala o microframework que nos ajuda com rotas (endereços, url) e views (front-end)*/

# Instala o Nodemon;
$ npm install -D Nodemon
/*instala o Nodemon como dependência de desenvolvimento. Ele reinicializa o servidor automaticamente toda vez que  modificamos o arquivo server.js*/

# Inicia o servidor;
$ node run dev
/*depois é só abrir o navegador e colocar o endereço do servidor: http://localhost:3001*/