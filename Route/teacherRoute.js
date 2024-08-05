const teacher = require("../Controller/teacherController");
const express = require("express");

const router = express.Router()

router.post("/teacher-register",teacher.TeacherRegister)

router.get("/teacher-details",teacher.getTeacherdetails)

module.exports = router;