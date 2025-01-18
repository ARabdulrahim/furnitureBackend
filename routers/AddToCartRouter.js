import express from "express"
import {AddtocartController, fetchAddtocart, Removeaddtocart} from "../controllers/cartController.js"
import { TokenVerify } from "../Utils/VerifyJwtToken.js";
import { validatelist } from "../Utils/Validatelistschema.js";
import { handleerr } from "../Utils/wrapAsync.js";

const router=express.Router();


let AddTocartRoute=router.post("/new",TokenVerify,handleerr(AddtocartController));
let dataAddTocart=router.get("/",TokenVerify, handleerr(fetchAddtocart));
let delAddTocart=router.delete("/:id",TokenVerify, handleerr(Removeaddtocart));

export{AddTocartRoute, dataAddTocart, delAddTocart};