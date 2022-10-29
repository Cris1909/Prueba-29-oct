const { response, request } = require("express");

const Materia = require("../models/materia");

const materiasPost = async(req, res = response) => {

    const { nombre, semestre, carrera } = req.body;
    const materia = new Materia( { nombre, semestre, carrera } );
    
    // Guardar en BD
    await materia.save();

    res.status(201).json({
        materia
    });
}

const materiasGet = async(req = request, res = response) => {

    const materias = await Materia.find();

    res.json({
        materias
    });

}

const materiasPut = async(req, res = response) => {
    const { id } = req.params;
    const { nombre, semestre, carrera } = req.body;

    const materia = await Materia.findByIdAndUpdate(id, { nombre, semestre, carrera });

    res.json({
        msg: "Datos actualizados en DB",
        antes: materia,
        actualizado: { nombre, semestre, carrera }
    });
}

const materiasDelete = async(req, res = response) => {

    const { id } = req.params;

    const materia = await Materia.findByIdAndDelete( id );

    res.json({
        msg: "Materia Eliminada",
        materia
    });
}

module.exports = {
    materiasPost,
    materiasGet,
    materiasPut,
    materiasDelete
}