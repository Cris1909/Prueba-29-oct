const Usuario = require("../models/usuario");
const Materia = require("../models/materia");

const emailExiste =  async(correo = "") => {
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ){
        throw new Error(`El correo ${ correo } ya existe en la DB`);
    }
}

const existeMateriaPorId =  async( id ) => {
    const existeMateria = await Materia.findById(id);
    if( !existeMateria ){
        throw new Error(`El id de materia: ${ id } no existe`);
    }
}    

const existeUsuarioPorId =  async( id ) => {
    const existeUsuario = await Usuario.findById(id);
    if( !existeUsuario ){
        throw new Error(`El id de usuario: ${ id } no existe`);
    }
}    

module.exports = {
    emailExiste,
    existeMateriaPorId,
    existeUsuarioPorId
}