import { listSchema, reviewSchema, userLoginSchema, userSignupSchema } from "../Schema.js";
import { ExpressError } from "./ExpressError.js";


//user
const validateUserSignup=(req, res, next)=>{
    let result=userSignupSchema.validate(req.body);
    if(result.error){
        throw new ExpressError(400, result.error.message);
    }else{
        next();
    }
}

const validateUserLogin=(req, res, next)=>{
    let result=userLoginSchema.validate(req.body);
    if(result.error){
        throw new ExpressError(400, result.error.message);
    }else{
        next();
    }
}
//list
const validatelist=(req, res, next)=>{
    let result=listSchema.validate(req.body);
    if(result.error){
        throw new ExpressError(400, result.error.message)
    }else{
        next();
    }
}

//review
const validateReview=(req,res, next)=>{
    let result=reviewSchema.validate(req.body);
    if(result.error){
        throw new ExpressError(400, result.error.message);
    }else{
        next();
    }
}
export {validatelist, validateReview, validateUserSignup, validateUserLogin};