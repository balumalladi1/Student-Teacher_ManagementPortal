
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true,
    },
    student:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }],
    teacher:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Teacher'
    }]
})

const User = mongoose.model("User",UserSchema);

module.exports = User;