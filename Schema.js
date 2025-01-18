import Joi from "joi";



 const listSchema= Joi.object({
    // list : Joi.object({
        title : Joi.string().required(),
        qty: Joi.number().required(),
    discription : Joi.string().required(),
    price : Joi.number().required().min(0)
    // }).required()
   
 });

 const reviewSchema=Joi.object({
    // review:Joi.object({
        rating : Joi.number().min(1).max(5),
        comment : Joi.string().required(),
    // }).required()
 });

 const userSignupSchema=Joi.object({
      username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).max(10).required(),
    role:Joi.string().required(),

 })

 const userLoginSchema=Joi.object({
   email: Joi.string().email().required(),
   password: Joi.string().min(4).max(10).required(),
 })


 export{listSchema, reviewSchema, userSignupSchema, userLoginSchema};

 