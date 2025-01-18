import mongoose, { Schema } from "mongoose";

const itemSchema=new mongoose.Schema({
    img:{
        type:String,
        require:true,
    },
    title:{
        type: String,
        required:true
    },
    discription:{
        type: String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    prodId:{
        type:String,
        required:true
    },
   qty:{
    type:Number,
   
   }
})

const cartSchema=new mongoose.Schema({
    ownerId:{
       type: Schema.Types.ObjectId,
       ref:"User",
    },
    items:[itemSchema],
})

const cartModel=mongoose.model("Cart", cartSchema);
export {cartModel};