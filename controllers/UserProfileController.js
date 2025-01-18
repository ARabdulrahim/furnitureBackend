import { User } from "../models/userModel.js";

let userProfileController=async(req, res)=>{
    const email=req.TokenData.email;
    let userData=await User.findOne({email});
    userData.img=req.file.path;
   let data= await userData.save();
   res.send({sucess: true, message:"Profile Updated", data});
}

export{userProfileController};