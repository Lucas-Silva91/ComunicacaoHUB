const express = require ('express');
const app = express();

const endpointCliente = require ('./api/endpoints/cliente')

app.use (express.json());
app.use ('/cliente', endpointCliente)


module.exports = app