const express = require("express");
const sundayController = require("../controllers/sundayController");
// const authController = require("../controllers/authController");

const router = express.Router();

// router.use(authController.protect, authController.restrictTo("admin"));
// Basic sunday info
router.get("/", sundayController.getResults);

// Single sunday
router.get("/:slug", sundayController.getSchedule);

// Month of sundays
router.get("/month/:month", sundayController.getMonth);

router.post("/", sundayController.createSunday);
router.put("/:slug", sundayController.editSunday);
router.delete("/:slug", sundayController.deleteSunday);

module.exports = router;
