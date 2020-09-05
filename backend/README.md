Node.js (back-end);

# Iniciar o servidor;
$ node run dev
/*depois é só abrir o navegador e colocar o endereço do servidor: http://localhost:3001*/

# Iniciar o mongodb dentro do Docker;
$ docker start mongodb

OBS: se não funcionar, as vezes é necessário dar o comando docker kill mongodb e em seguida docker start mongodb ou apenas docker restart
------------------------------------------

# Routes;

    Products:
        List all -> http://localhost:3001/api/products (GET)
        List by id -> http://localhost:3001/api/products/:id (GET)
        Create -> http://localhost:3001/api/products (POST)
        Update -> http://localhost:3001/api/products/:id (PUT)
        Delete -> http://localhost:3001/api/products/:id (DELETE)

------------------------------------------   
# Algumas dependências do projeto:

    #  Express;
    Microframework que nos ajuda com rotas (endereços, url) e views (front-end)

    # Nodemon;
    Reinicializa o servidor automaticamente toda vez que  modificamos o arquivo server.js

    # Mongoose
    é um ORM de banco não relacionais em MongoDB
    ORM (Object Relational Mapining): encapsula as operações do BD através do código, ou seja, em vez de usar a linguagem da base de dados, ele nos permite utilizar o código JavaScript para fazer o CRUD.
 

# Instalando MongoDB -------------------------------------------------------------------------------
# Instalar MongoDB utilizando Docker;
    download: https://docs.docker.com/
    Docker: permite fazer a conteinização de recursos dentro do sistema.
    Fazermos todas os “módulos” separados por containers, assim, se alteramos algo em um isso não afeto o outro contêiner. Os conteiners podem se comunicar com os outros através de canais bem definidos
    Criamos uma máquina virtual (em Linux) que fica totalmente à parte, e podemos usar da forma que quisermos

    1.	Instalar o Docker (Desktop para Windows ou Docker Toolkit). 
    Versões anteriores ao Windows 10, tem que instalar 
    Talvez seja preciso reiniciar o PC
    Testar se instalou corretamente: comando: Docker
    Também tem dicas sobre o DOCKER pelo link: https://docs.docker.com/docker-for-windows/#diagnose-and-feedback 
    ------------------------
    Se não conseguir instalar o Docker no Windows 10, então tem que baixar o docker tookbox;
    https://devconnected.com/how-to-install-docker-on-windows-7-8-10-home-and-pro/
    ou vir no link direto para baixar a última versão exe; https://github.com/docker/toolbox/releases

    depois tem que iniciar o Docker Quickstart Terminal para conseguir executar comandos no Docker (e na primeira vez deve aguardar instalar a máquina virtual);
    
    ------------

    2.	docker pull mongo   /*baixa a máquina virtual do mongodb */

    3.	docker run --name mongodb -p 27017:27017 -d mongo /*sobe uma nova máquina virtual contendo o mongodb, o –name indica a forma que eu quero fazer, e o nome nesse caso foi o mongodb, mas pode ser qualquer um, indico também que a minha porta 27017 é para ser a porta 27017 do mongo, o -d indica qual imagem quero utilizar, que no caso é o mongodb*/

    4.	visualizar as imagens rodando no Docker: docker ps
        visualizar todas as imagens criadas: docker ps –a

    5.	depois de iniciar a imagem pela primeira vez é só dar o comando abaixo para rodar das próximas vezes que reiniciar o pc:
    docker start nome-da-imagem /*ex: docker start mongodb*/
 
    7.	docker ps /* retorna as imagens que estão rodando */
    --------
    8.	podemos utilizar um soter chamado Robo 3T, para acessar e controlar os schemas ou databases
    https://robomongo.org/download

    abre e clica em criar uma conexão;
    9.	 
    E clique em conectar, e vai aparecer as databases
    ------------
    Obs: docker ps (exibe as imagens executando)
    docker ps -a //ou -all exibe até as imagens pausadas
    Importante lembrar que quando reinicia o computador, não precisar iniciar a imagem do mesmo modo da primeira vez, é so exerver por ex: docker start mongodb

 ----
# Instalar MongoDB Sem usar o Docker;
    Se não quiser usar o Docker pode instalar apenas o mongodb mesmo;
    https://www.mongodb.com/download-center/community  baixar em MSI

    Nesse caso, depois da instalação, você deve entrar na pasta do mongodb e executar o mongod.exe para iniciar o servidor em http://localhost:270127

    Este tutorial mostra o passo a passo para instalação e inicialização do MongoDB;
    https://medium.com/@NetoVieiraLeo/instalando-e-configurando-o-mongodb-no-windows-b1d4e1e58911
----
