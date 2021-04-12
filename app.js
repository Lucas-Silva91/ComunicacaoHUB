const express = require ('express');
const app = express();

const endpointClient = require ('./api/endpoints/client')

app.use (express.json());
app.use ('/client', endpointClient)


module.exports = app