import { upload } from "../config/multer.js"
import { ExpressError } from "./ExpressError.js";

const UploadhandleFile=(req, res, next)=>{
  upload.single("img")(req, res,(err)=>{
    if(err){
        throw new ExpressError({sucess: false, message: "something went wrong"});
    }
    next();
  });
 
}
export{UploadhandleFile};