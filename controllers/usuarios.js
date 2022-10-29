const { response, request } = require("express");

const Usuario = require("../models/usuario");
const Materia = require("../models/materia")

const usuariosPost = async(req, res = response) => {

    if ( await Materia.countDocuments() === 0 ){
        return res.status(401).json({
            msg: "no materias usuarios en DB | por favor crea almenos una"
        });
    }

    const { nombre, apellido, correo, sexo, materias } = req.body;

    const usuario = new Usuario( { nombre, apellido, correo, sexo, materias } );
    
    // Guardar en BD
    await usuario.save();

    res.status(201).json({
        usuario
    });
}

const usuariosGet = async(req = request, res = response) => {

    const { correo } = req.params;
 
    const usuario = await Usuario
        .findOne({ correo })
        .populate('materias')

    // const { usuarios } = usuario;

    usuario.sexo = usuario.sexo === "femenino"? "Soy una mujer": "Soy un hombre";

    nombreCompleto = `${usuario.nombre} ${usuario.apellido}`

    res.json({
        nombreCompleto,
        usuario
    });

}

const usuariosPut = async(req, res = response) => {
    const { id } = req.params;
    const { nombre, apellido, correo, sexo, materias } = req.body;

    const usuario = await Usuario.findByIdAndUpdate(id, { nombre, apellido, correo, sexo, materias });

    res.json({
        msg: "Datos actualizados en DB",
        antes: usuario,
        actualizado: { nombre, apellido, correo, sexo, materias }
    });
}

const usuariosDelete = async(req, res = response) => {

    const { id } = req.params;

    const usuario = await Usuario.findByIdAndDelete( id );

    res.json({
        msg: "Usuario Eliminado",
        usuario
    });
}

module.exports = {
    usuariosPost,
    usuariosGet,
    usuariosPut,
    usuariosDelete
}