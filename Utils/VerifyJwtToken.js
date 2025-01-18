import   "dotenv/config";
import jwt from "jsonwebtoken";
import { ExpressError } from "./ExpressError.js";

const jwtkey=process.env.SECRET_KEY;

const TokenVerify=(req, res, next)=>{
    let token=req.headers['authorization'];
    if(token){
        token= token.split(' ')[1];
        jwt.verify(token, jwtkey , (err, valid)=>{
            if(err){
                throw new ExpressError(401, "Provide a valid token")
            }else{ 
                req.TokenData=valid;
                next();
            }
        });
    }else{
        throw new ExpressError(403, "provie a token");
    }

    
      
  
}

export{TokenVerify};