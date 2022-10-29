const { Router } = require("express");
const { check } = require("express-validator");

const { usuariosPost, usuariosGet, usuariosPut, usuariosDelete } = require("../controllers/usuarios");

const { emailExiste, existeUsuarioPorId } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post("/", [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("apellido", "El apellido es obligatorio").not().isEmpty(),
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom( emailExiste ),
    check("sexo", "No es un sexo valido").isIn(["femenino", "masculino"]),
    check("materias", "Debe ingresar al menos una materia").not().isEmpty(),
    validarCampos
], usuariosPost )

router.get("/:correo",[
    check("correo").not().custom( emailExiste ),
    validarCampos
], usuariosGet );

router.put("/:id", [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom( existeUsuarioPorId ),
    validarCampos
], usuariosPut);

router.delete("/:id", [
    check("id", "No es un ID valido").isMongoId(),
    check("id").custom( existeUsuarioPorId ),
    validarCampos
], usuariosDelete);

module.exports = router;