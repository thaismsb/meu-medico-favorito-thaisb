const express = require("express")
const router = express.Router()
const controller = require("../controllers/doctorController")

router.post("/doctors", controller.createDoctor)
router.get("/doctors", controller.getAllDoctors)

module.exports = router;