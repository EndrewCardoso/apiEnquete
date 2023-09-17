require('dotenv').config();                         //Env - Arquivo para separar as variáveis de ambiente.
const express = require('express');                 //Express - Facilitar/Auxiliar na criação e organização das rotas.
const cors = require('cors');                       //Cors - Auxiliar no controle das requisições HTTP.
const bodyParser = require('body-parser');          //Body-Paser - Auxiliar no processamento dos dados enviados no body das requisições HTTP.

const routes = require('./routes')

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.use('/api', routes);

server.listen(process.env.PORT, ()=>{
    console.log('Servidor Rodando...');
});