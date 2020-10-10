const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombre: String,
    apellidos: String,
    username: String,
    password: String,
    email: String
});

module.exports = mongoose.model('usuario', usuarioSchema);