
const Student = require("../Model/studentSchema");

const StudentRegister = async(req,res)=>{
    const {name,email,grade} = req.body;

    try {
        const updateStudent = new Student({
            name,email,grade
        })
        
        await updateStudent.save()
        res.status(200).json("Student Details Updated")

    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error")
    }
}

const getstudentdetails = async(req,res)=>{
    try {
        const students = await Student.find();
        res.json(students);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}


module.exports = {StudentRegister,getstudentdetails};