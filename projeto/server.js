'use strict'

const http = require('http');
const debug  = require('debug')('nodestr:server');
const express = require('express');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set ('port', port)

const server = http.createServer(app);
const router = express.Router();

//Rotas criadas
const route = router.get('/', (req, res, next)=>{
    res.status(200).send({
        title: "Node Store API ",
        version: "0.0.1"
    })
});

app.use('/', route);

//Abrindo um servidor
server.listen(port);
console.log('Servidor rodando na porta: ' + port)


//Normalizando a porta
function normalizePort(val){
    const port = parseInt(val, 10)
    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port;
    }
    return false
}