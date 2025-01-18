import mongoose, { Schema } from "mongoose";

const reviewSchema= new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
      type:String,
      require:true
    },
    creteDate:{
        type: Date,
        default: Date.now(),
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
})

let review=mongoose.model("Review", reviewSchema);

export{review};