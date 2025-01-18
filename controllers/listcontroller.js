import { cloudinary } from "../config/cloudinary.js";
import listmodel from "../models/listmodel.js"


// let data=[{
//         img:{
// url:"https://t4.ftcdn.net/jpg/03/71/92/67/360_F_371926762_MdmDMtJbXt7DoaDrxFP0dp9Nq1tSFCnR.jpg",
// filename:"furniture_shoap/rzpjqmjy"
// },
// title: "Sofa",
// discription: "Amazing ",
// price: 23000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://apricot.com.pk/cdn/shop/files/Nordic-Modern-Computer-Study-Table-White-Apricot-4386.jpg?v=1727601501",
// filename:"furniture_shoap/rdfsytfbr9ilhttczpjqmjy"
// },
// title: "Study Table",
// discription: "Amazing ",
// price: 2000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLkMIRDG3mhbSJOq0iI1U9XysGUjm_0-6_Q&s",
// filename:"furniture_shoap/ryt9ilhttczpjqmjys"
// },
// title: "Bed",
// discription: "Amazing ",
// price: 2000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://www.granitelane.com.au/cdn/shop/products/sarachair.png?v=1650087409",
// filename:"furniture_shoap/rytfbr9ilhttczpjqmjy"
// },
// title: "Dining Table",
// discription: "Amazing ",
// price: 24000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://images-cdn.ubuy.co.in/668216169fb3464d530a42e9-79-black-modern-dining-table-set-for.jpg",
// filename:"furniture_shoap/rytfbr9ilhttcjy"
// },
// title: "Dining Table",
// discription: "Amazing ",
// price: 25000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://assets.wfcdn.com/im/37214764/resize-h800-w800%5Ecompr-r85/3025/302535401/Family+Sofa+Set+Deep+Seat+Sofa%2C+Warm+Sofa+For+Home+Cinema+And+Living+Room%2C+One+2-Seater+Sofa+And+One+3-Seater+Sofa%2CBeige+Corduroy.jpg",
// filename:"furniture_shoap/rytfbr9ilhttczpjqmjy"
// },
// title: "Sofa",
// discription: "Amazing ",
// price: 3000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://5.imimg.com/data5/DO/IE/RE/SELLER-54017317/executive-chair-250x250.jpg",
// filename:"furniture_shoap/rytfbr9ilhttczpjdfqmjy"
// },
// title: "Study Table",
// discription: "Amazing ",
// price: 20000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// {
//         img:{
// url:"https://assets.weimgs.com/weimgs/ab/images/wcm/products/202437/0006/open-box-mid-century-upholstered-dining-chair-wood-legs-m.jpg",
// filename:"furniture_shoap/rdfytfbr9ilhttczpjqmjy"
// },
// title: "Chair",
// discription: "Amazing ",
// price: 2000,
// qty: 1,
// owner: "678b7856e3034c956d4a2546"
// },

// ]

//show list
const showListcontroller=async(req, res, next)=>{
   
        let data=await listmodel.find();
        res.send({sucess:true, message:"Lists has fetched", data});
   
}

//create list
const createListController=async(req, res, next)=>{
        const{title, discription, price, qty}=req.body;
        const OwnerId=req.TokenData._id;
        const url=req.file.path;
        const filename=req.file.filename;
        let list=new listmodel({
                title: title, 
                discription: discription,
                qty:qty,
                price: price,
                owner : OwnerId
                });
            list.img={url, filename};
        const data=await list.save();
        console.log(data);
       res.send({sucess:true, message:"List is created", data});
  
}

//Show list by id
const showListByIdController=async(req, res, next)=>{
        let {id}=req.params;
        const data=await listmodel.findById(id).populate( {path: "reviews", populate: { path: "author"}});
        res.send({sucess:true, message:"List has fetched", data});
            
}

//show edit list by id
const showListeditByIdController=async(req, res, next)=>{
        let {id}=req.params;
        const data=await listmodel.findById(id);
        res.send({sucess:true, message:"List has fetched", data});
}


//edit list by id
const editListController=async(req, res, next)=>{
        let {id}=req.params;
        let listing=await listmodel.findByIdAndUpdate(id, {...req.body.listing});
              if(typeof req.file!== "undefined"){
             let url=req.file.path;
             let filename= req.file.filename;
             listing.img={url, filename};
           let data=await listing.save();

        res.send({sucess:true, message:"List has updated", data});    
}
}

//delete list by id
const destroyListController=async(req, res, next)=>{
        const img=req.body;
        await cloudinary.uploader.destroy(img.url);
        let data=await listmodel.findOneAndDelete(img.url);
        res.send({sucess:true, message:"List is deleted", data});
        
}



export {createListController, showListcontroller, showListByIdController, destroyListController, editListController, showListeditByIdController};