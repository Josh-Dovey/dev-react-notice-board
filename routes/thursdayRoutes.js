const express = require("express");
const thursdayController = require("../controllers/thursdayController");
// const authController = require("../controllers/authController");

const router = express.Router();

// router.use(authController.protect, authController.restrictTo("admin"));
// Basic Thursday info
router.get("/", thursdayController.getResults);

// Single Thursday
router.get("/:slug", thursdayController.getSchedule);

// Month of Thursdays
router.get("/month/:month", thursdayController.getMonth);

router.post("/", thursdayController.createThursday);
router.put("/:slug", thursdayController.editThursday);
router.delete("/:slug", thursdayController.deleteThursday);

module.exports = router;
