'use strict'

// Modulos node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

// Ejecutar express (http)
var app = express()

// Cargar ficheros rutas
var routes = require('./routes/routes');

//Middlewares
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin','http://localhost:8080');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials','true');
    next();
});

// Añadir prefijos a rutas / Cargar rutas
app.use('/api',routes)

// Exportar modulo (fichero actual)
module.exports = app;