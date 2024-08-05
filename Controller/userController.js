
const User = require("../Model/UserSchema");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs") 
const dotEnv=require('dotenv');

dotEnv.config()

const secretKey = process.env.whatisyourname

const UserRegister = async(req,res)=>{
    const {name,password} = req.body;

    try {
        const user = await User.findOne({name})
        
        if(user){
            res.status(200).json("User already Exist"); 
        }

        const decodedpassword = await bcrypt.hash(password,10)

        const updateRegister = new User({
            name,
            password :decodedpassword
        })

        await updateRegister.save();

        res.status(200).json("Details Updated Succesfully")
        console.log(" Details Updated Succesfully")
        
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error")
    }
}


const userLogin = async(req,res)=>{
    const {name,password} = req.body;

    try {
        const user = await User.findOne({name})

        if (!user || !(await bcrypt.compare(password,user.password))){
            res.status(401).json("Invalid username or password")
        }

        const token = jwt.sign({userId:user._id},secretKey,{expiresIn:"1h"})

        const userId=user._id
        res.status(200).json({success:"Login succesful",token,userId})
        console.log(name,"this is token",token);

        
    } catch (error) {
        console.error(error)
        res.status(500).json("Internal Server Error")
    }
}


module.exports = {UserRegister,userLogin}