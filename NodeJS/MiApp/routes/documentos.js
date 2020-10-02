const router = require('express').Router();

router.get('/:nombre.:extension', (req, res) => {
    console.log(req.params);
    res.send('Ruta para los documentos');
});

router.get('/all', (req, res) => {
    console.log(req.query);
    res.send('Ruta con todos los documentos');
});

router.post('/nuevo', (req, res) => {
    const { nombre: name, autor: author } = req.body;
    console.log(name, author);
    res.send('Ruta para crear documentos');
});

module.exports = router;