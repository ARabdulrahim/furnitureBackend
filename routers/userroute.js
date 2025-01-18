import express from "express";
import { login, signup} from "../controllers/usercontroller.js";
import {  validateUserLogin, validateUserSignup } from "../Utils/Validatelistschema.js";
import { handleerr } from "../Utils/wrapAsync.js";

const router=express.Router();

const UserSignup=router.post("/signup", validateUserSignup, handleerr(signup));
const UserLogin=router.post("/login",validateUserLogin, handleerr(login));

export{UserSignup, UserLogin};