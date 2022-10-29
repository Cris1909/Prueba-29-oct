const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"]
    },
    apellido: {
        type: String,
        required: [true, "El apellido es obligatorio"]
    },
    correo: {
        type: String,
        required: [true, "El correo es obligatorio"],
        unique: true
    },
    sexo: {
        type: String,
        required: true,
        emun: ["femenino", "masculino"]
    },
    materias: [{ type: Schema.Types.ObjectId, ref: 'Materia' }]
    
});

UsuarioSchema.methods.toJSON = function() {
    const { __v, ...usuario } = this.toObject();
    return usuario;
}

module.exports = model( "Usuario", UsuarioSchema );