const Teacher = require("../Model/teacherSchema");

const TeacherRegister = async(req,res)=>{
    const {name,email,role} = req.body;

    try {
        const updateTeacher = new Teacher({
            name,email,role
        })
        
        await updateTeacher.save()
        res.status(200).json("Teacher Details Updated")

    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error")
    }
}

const getTeacherdetails = async(req,res)=>{
    try {
        const teachers = await Teacher.find();
        res.json(teachers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports = { TeacherRegister,getTeacherdetails};