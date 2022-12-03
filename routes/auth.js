const express = require("express");
const router = express.Router();

const {
	register,
	login,
	forgotpassword,
	getresetpassword,
	resetpassword,
} = require("../controllers/auth");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:id/verify/:token").get(getresetpassword);
router.route("/resetpassword/:id/verify/:token").post(resetpassword);

module.exports = router;
