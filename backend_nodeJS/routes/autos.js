const express = require("express");
const router = express.Router();

const autosController = require("../controllers/autoController");

//Rutas declaradas para el crud
router.get("/consultaAutos", autosController.getAuto);
router.post("/enviar", autosController.addAuto);
router.put("/:id", autosController.updateAuto);
router.delete("/:id", autosController.deleteAuto);



module.exports = router;