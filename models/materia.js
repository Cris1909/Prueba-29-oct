const { Schema, model } = require('mongoose');

const MateriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre de la materia es obligatoria"]
    },
    semestre: {
        type: Number,
        required: [true, "El semestre es obligatorio"]
    },
    carrera: {
        type: String,
        required: [true, "La carrera es obligatoria"]
    }
});

MateriaSchema.methods.toJSON = function() {
    const { __v, ...materia } = this.toObject();
    return materia;
}

module.exports = model( "Materia", MateriaSchema );