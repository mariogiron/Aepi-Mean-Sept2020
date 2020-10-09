const router = require('express').Router();
const Persona = require('../models/persona');

// Insertar una persona
router.get('/insert', (req, res) => {
    const pers = new Persona();
    pers.nombre = 'Antonio';
    pers.apellidos = 'García';
    pers.email = 'tony@gmail.com';
    pers.edad = 56;
    pers.activo = true;

    // Con callback
    // pers.save((err, nuevaPersona) => {
    //     if (err) {
    //         return res.send('Error en la inserción');
    //     }
    //     console.log(nuevaPersona);
    //     res.send('Se ha insertado una nueva persona');
    // });

    // Con promesa
    pers.save()
        .then(nuevaPersona => {
            console.log(nuevaPersona);
            res.send('Se ha insertado una nueva persona');
        })
        .catch(error => console.log(error))
});

// Inserta una persona a través de create
router.get('/insert_v2', (req, res) => {
    Persona.create({ nombre: 'Lorenzo', apellidos: 'González', email: 'lorenzo@gmail.com', edad: 78, activo: false })
        .then(nuevaPersona => {
            console.log(nuevaPersona);
            res.send('Se ha insertado una persona');
        })
        .catch(error => console.log(error));
});

// Inserta una persona con create (async-await)
router.get('/insert_v3', async (req, res) => {
    try {
        const nuevaPersona = await Persona.create({ nombre: 'Raul', apellidos: 'Romero', email: 'raul@gmail.com', edad: 22, activo: true });
        console.log(nuevaPersona);
        res.send('Se ha insertado una persona');
    } catch (error) {
        console.log(error);
    }
});

// Recupero todas las personas
router.get('/find', (req, res) => {
    Persona.find()
        .then(personas => {
            res.json(personas);
        })
        .catch(error => console.log(error));
});

// Recupero por un nombre
router.get('/find_by_name', async (req, res) => {
    try {
        const personas = await Persona.find({ nombre: 'Raul' });
        res.json(personas);
    } catch (error) {
        console.log(error);
    }
});

// Recupero los que son mayores de edad
router.get('/find_mayores_edad', async (req, res) => {
    const personas = await Persona.find({ edad: { $gt: 18, $lt: 65 } });
    res.json(personas);
});

module.exports = router;