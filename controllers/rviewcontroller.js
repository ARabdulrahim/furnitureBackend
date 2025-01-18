import listmodel from "../models/listmodel.js";
import { review } from "../models/review.js";



const reviewController=async(req, res, next)=>{
    let{rating, comment}=req.body;
    const userId=req.TokenData._id;
    let list=await listmodel.findById(req.params.id);
    let newReview=await review.create({rating, comment, author: userId});
        res.send({sucess:true, message:"review is created", newReview});
    list.reviews.push(newReview);
    await list.save();
   
    
}

const reviewDeleteController=async(req, res)=>{
    let{id , revid}=req.params;
    
     await listmodel.findByIdAndUpdate(id,{$pull: {reviews: revid}});
    let data=await review.findByIdAndDelete(revid);
    res.send({sucess:true, message:"review is deleted", data});
}
export{reviewController, reviewDeleteController};