const express = require('express');
const conectarBD = require('./config/db');

//crear el servidor...
const app = express();

// conactar a la base de datos
conectarBD();

//definir la ruta principal
app.get('/', (req, res) => { //req request, res response
    res.send('Hola Mundo');
})

app.listen(4000, () => {
    console.log('el servidor esta corriendo perfectamente')
})