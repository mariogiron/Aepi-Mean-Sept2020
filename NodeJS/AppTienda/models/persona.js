const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personaSchema = new Schema({
    nombre: String,
    apellidos: String,
    email: String,
    edad: Number,
    activo: Boolean
});

module.exports = mongoose.model('persona', personaSchema);