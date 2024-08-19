const express = require("express");
const router = express.Router();

const autosController = require("../controllers/autoController");

router.get("", autosController.getAuto);
router.post("", autosController.addAuto);
router.put("/:id", autosController.updateAuto);
router.delete("/:id", autosController.deleteAuto);



module.exports = router;