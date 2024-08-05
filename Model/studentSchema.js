const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    grade:{
        type:String,
        require:true,
    },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

const Student = mongoose.model("Student",StudentSchema);

module.exports = Student;