import mongoose, { Schema } from "mongoose";
import { review } from "./review.js";

const listSchema=new mongoose.Schema({
    img:{
        url: String,
        filename:String,
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
    qty:{
        type:Number,
        require:true,
    },
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
    owner:
        {
            type: Schema.Types.ObjectId,
            ref:"User"
        }
    
    
})

listSchema.post("findOneAndDelete", async(listmodel)=>{
    if(listmodel){
        await review.deleteMany({_id : {$in: listmodel.reviews}});
    }
})
// export default mongoose.model("List", listSchema);
const listmodel= mongoose.model("List", listSchema);
export default listmodel;