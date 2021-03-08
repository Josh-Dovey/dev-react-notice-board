const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// router.post('/signup', authController.signup);
router.post("/login", authController.login);
router.get("/isLoggedIn/:jwt", authController.isLoggedIn);
router.get("/logout", authController.logout);

module.exports = router;
