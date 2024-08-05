
const user = require("../Controller/userController")
const express = require("express");

const router = express.Router()

router.post("/add-register",user.UserRegister)

router.post("/login",user.userLogin)

module.exports = router;

