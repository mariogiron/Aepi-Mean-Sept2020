var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {
    title: 'Express',
    productos: 1,
    animales: ['perro', 'gato', 'pájaro', 'hamster']
  });
});

router.get('/info', (req, res) => {
  res.render('info', {
    title: 'INFO',
    ciudades: ['Madrid', 'Pamplona', 'Barcelona', 'Sevilla', 'Cádiz']
  });
});

module.exports = router;
