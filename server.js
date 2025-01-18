import express from "express";
import { connectTodb } from "./config/init.js";
import { createList, destroyList, editList, showList, showListById, showeditListById } from "./routers/listrouter.js";
import{ExpressError} from "./Utils/ExpressError.js";
import { creteReview,  Reviewdelete } from "./routers/reviewrouter.js";
import { UserLogin, UserSignup } from "./routers/userroute.js";
import cors from "cors";
import { AddTocartRoute, dataAddTocart, delAddTocart } from "./routers/AddToCartRouter.js";
import { UserPrfolileRoute } from "./routers/userProfileRouter.js";
const app=express();

app.use(cors());
app.use(express.json());

//init db
connectTodb();

//user
app.use("/user", UserSignup);
app.use("/user", UserLogin);
app.use("/user", UserPrfolileRoute);

//list
app.use("/list", showList);
app.use("/list", createList);
app.use("/list",showListById);
app.use("/list",showeditListById);
app.use("/list",editList);
app.use("/list",destroyList);

//review
app.use("/list", creteReview);
app.use("/list", Reviewdelete);

//Cart
app.use("/addtocart", AddTocartRoute);
app.use("/addtocart", dataAddTocart);
app.use("/addtocart", delAddTocart);

app.use("*", (req, res,next)=>{
    next( new ExpressError(404, "page Not Found"));
})

app.use((err, req, res, next)=>{
    let{statusCode=500, message="something went wrong"}=err;
    res.status(statusCode).send({sucess:false, message:message});
})


app.listen(8080,()=>{
    console.log("server is running on 8080");
})