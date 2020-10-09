const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    departamento: String
});

module.exports = mongoose.model('producto', productoSchema);