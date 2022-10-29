const { Router } = require("express");
const { check } = require("express-validator");

const { materiasPost, materiasGet, materiasPut, materiasDelete } = require("../controllers/materias");
const { existeMateriaPorId } = require("../helpers/db-validators");

const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post("/", [
    check("nombre", "El nombre de materia es obligatorio").not().isEmpty(),
    check("semestre", "El semestre es obligatorio").not().isEmpty(),
    check("carrera", "La carrera es obligatoria").not().isEmpty(),
    validarCampos
], materiasPost );

router.get("/", materiasGet);

router.put("/:id", [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom( existeMateriaPorId ),
    validarCampos
], materiasPut);

router.delete("/:id", [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom( existeMateriaPorId ),
    validarCampos
], materiasDelete);

module.exports = router;