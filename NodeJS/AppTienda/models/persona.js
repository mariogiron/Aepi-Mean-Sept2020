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

// Método de instancia para recuperar todas las personas activas
personaSchema.statics.activos = function () {
    return this.model('persona').find({
        activo: true,
        edad: { $gte: 18 }
    });
}

module.exports = mongoose.model('persona', personaSchema);