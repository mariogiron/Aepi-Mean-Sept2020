const router = require('express').Router();
const Producto = require('../../models/producto');
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {

    // usaurio con login correcto
    console.log(req.user);

    Producto.find()
        .then(productos => res.json(productos))
        .catch(error => res.status(500).json({ error: error.message }));
});

router.post('/', [
    check('nombre', 'El campo nombre es requerido').exists().notEmpty(),
    check('precio', 'El campo precio es requerido').exists().notEmpty().isNumeric(),
    check('departamento').custom(valueDpto => {
        const departamentos = ['electrodomesticos', 'informatica', 'hogar', 'fotografia'];
        return departamentos.includes(valueDpto);
    })
], (req, res) => {

    // Validamos req.body
    const erroresValidacion = validationResult(req);
    if (!erroresValidacion.isEmpty()) {
        return res.json(erroresValidacion.array());
    }

    Producto.create(req.body)
        .then(nuevoProducto => {
            res.json({
                success: 'El producto se ha creado con éxito',
                producto: nuevoProducto
            })
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

router.put('/', (req, res) => {
    Producto.findByIdAndUpdate(req.body.id, req.body, { new: true })
        .then(productoEditado => {
            res.json({
                success: 'El producto se ha editado correctamente',
                producto: productoEditado
            })
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

router.delete('/:productoId', (req, res) => {
    Producto.findByIdAndDelete(req.params.productoId)
        .then(productoBorrado => {
            res.json({
                success: 'Producto borrado',
                producto: productoBorrado
            })
        })
        .catch(error => res.status(422).json({ error: error.message }));
});

module.exports = router;