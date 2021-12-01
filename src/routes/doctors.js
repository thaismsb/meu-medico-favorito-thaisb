const express = require("express");
const router = express.Router();
const controller = require("../controllers/doctorController");

router.post("/doctors", controller.createDoctor);
router.get("/doctors", controller.getAllDoctors);
router.get("/:id", controller.getDoctor);
router.put("/:id", controller.updateDoctor);
router.patch("/:id/favorite", controller.updateFavorite);
router.delete("/:id", controller.deleteDoctor);

module.exports = router;