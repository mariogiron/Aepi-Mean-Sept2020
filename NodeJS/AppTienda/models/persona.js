const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    edad: Number,
    activo: Boolean
});

personaSchema.virtual('nombre_completo').get(function () {
    return this.nombre + ' ' + this.apellidos;
});

module.exports = mongoose.model('persona', personaSchema);