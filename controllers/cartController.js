import { cartModel} from "../models/cart.js"

const AddtocartController=async(req, res)=>{
    let{title, discription, img, price , prodId, qty}=req.body;
    let ownerId=req.TokenData._id;

    let cart= await cartModel.findOne({ownerId});
    if(!cart){
        cart=new cartModel({ownerId, items:[]});
    }

    const itemIndex=cart.items.findIndex((item)=> item.prodId.toString() === prodId);

    if(itemIndex > -1){
        cart.items[itemIndex].qty += qty;
        cart.items[itemIndex].price += price*qty;
    }else{
      cart.items.push({prodId, title,discription, price, qty, img: img.url})  
    }
   let data=await cart.save();

    res.send({sucess: true, message:"data added in cart", data});
  
}

const fetchAddtocart=async(req, res)=>{
    let ownerId=req.TokenData._id;
    let data=await cartModel.findOne({ownerId});
    res.send({sucess:true, message:"data has fetched", data});
}

const Removeaddtocart=async(req,res)=>{
        let {id}=req.params;
        
        const ownerId = req.TokenData._id;
        let cart = await cartModel.findOne({ ownerId });
        cart.items = cart.items.filter((item)=>item._id.toString() !== id)
       let data= await cart.save();
      
        res.status(200).send({sucess:true, message:"product deleted", data});
        
}

export{AddtocartController, fetchAddtocart, Removeaddtocart}

