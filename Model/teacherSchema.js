const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        require:true,
    },
    user:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

const Teacher = mongoose.model("Teacher",TeacherSchema);

module.exports = Teacher;