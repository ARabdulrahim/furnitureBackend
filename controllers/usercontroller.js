import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { ExpressError } from "../Utils/ExpressError.js";
import jwt from "jsonwebtoken";
import 'dotenv/config';

const SECRET_KEY=process.env.SECRET_KEY;


const signup=async(req, res)=>{
    const{username, email, password, role}=req.body;
    const userExist=await User.findOne({email});
    if(userExist){
        throw new ExpressError(404,{sucess:false, message:"Something Went Wrong"}); 
    }
    const hashPassword=await bcrypt.hash(password, 10);
    const newUser=new User({
        username:username,
        email:email,
        password:hashPassword,
        role:role,
    });

    let data=await newUser.save();
    res.status(200).send({sucess:true, message:"User registered Successfully", data});
}


const login=async(req, res)=>{
    const{email, password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        throw new ExpressError(404,{sucess:false, message:"Something Went Wrong"});
    }
    const isMatch=await bcrypt.compare(password, user.password);
    const jwtToken=jwt.sign(JSON.stringify(user), SECRET_KEY);
    if(!isMatch){
        throw new ExpressError(404,{sucess:false, message:"Invalid password"});
    }else{
        res.send({sucess:true, message:"User loggedin successfuly",jwtToken, user});
    }
}

export{signup, login};