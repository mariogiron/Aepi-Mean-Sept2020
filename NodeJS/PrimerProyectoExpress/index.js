const express = require('express');
const app = express();

require('dotenv').config();

// GET http://localhost:3100
app.get('/', (req, res) => {
    res.end('Respuesta sobre la ruta raiz');
});

// GET http://localhost:3100/hola
app.get('/hola', (req, res) => {
    res.end('Respuesta a la ruta HOLA');
});

// POST http://localhost:3100
app.post('/', (req, res) => {
    res.end('Respuesta POST desde la raiz');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server escuchando en el puerto ${PORT}!`);
    // console.log('Server escuchando en el puerto ' + process.env.PORT + '!');
});