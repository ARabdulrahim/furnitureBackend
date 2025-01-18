import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique:true,
        required:true,
    },
    img:{
        type:String,
        default:"https://www.elevenforum.com/data/attachments/45/45622-423967e182ed610e64465704d26689f8.jpg",
    },
    role: {
         type: String, 
         required:true, 
        },
    password:{
        type:String,
        required:true,
    },
})

const User=mongoose.model("User", userSchema);
export{User};