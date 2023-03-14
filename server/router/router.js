const express = require("express");
const { login, signup, deleteUser } = require("../controller/controller");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.delete("/delete", auth, deleteUser);

module.exports = router;
