var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  console.log(req.fechaActual);
  res.send('respond with a resource');
});

router.get('/new', (req, res) => {
  res.end('Respuesta de la ruta /users/new');
});

router.get('/all', (req, res) => {
  const personas = [
    { nombre: 'Mario', apellidos: 'Girón', edad: 37 },
    { nombre: 'Rocío', apellidos: 'García', edad: 19 },
    { nombre: 'Laura', apellidos: 'López', edad: 45 },
    { nombre: 'Roberto', apellidos: 'Martín', edad: 82 },
  ];

  res.json(personas);
});

module.exports = router;