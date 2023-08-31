const { Signup, Login } = require("../Controllers/AuthController");
const router = require("express").Router();

const userVerification = require("../Middlewares/AuthMiddleware").userVerification;

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

module.exports = router;