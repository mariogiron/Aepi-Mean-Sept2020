const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema({
    nombre: String,
    precio: Number,
    descripcion: String,
    departamento: String
});

// Método de instancia con callback
productoSchema.methods.mismoDepartamento = function (callback) {
    this.model('producto').find({ departamento: this.departamento }, callback);
}

// Método de instancia con promesas
productoSchema.methods.mismoDepartamentoV2 = function () {
    return this.model('producto').find({ departamento: this.departamento });
}

module.exports = mongoose.model('producto', productoSchema);