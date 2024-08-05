const student = require("../Controller/studentController");
const express = require("express");

const router = express.Router()

router.post("/student-register",student.StudentRegister)

router.get("/student-details",student.getstudentdetails)

module.exports = router;