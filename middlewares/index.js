
const User = require("../Model/UserSchema");

const jwt = require("jsonwebtoken");

const dotEnv = require("dotenv")

dotEnv.config()

const secretKey = process.env.whatisyourname;

const verifyToken = async(req,res,next)=>{

    const token =req.headers.token;
    if(!token){
        res.status(404).json("Token not available")
    }

    try {

        const decoded = jwt.verify(token ,secretKey);

        const user = await User.findById(decoded.userId)
        
        if(!user){
            res.status(404).json("User not available") 
        }

        req.userId = user._id

        next()
        
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error:"Internal Server Error"})
    }
}

module.exports=verifyToken;