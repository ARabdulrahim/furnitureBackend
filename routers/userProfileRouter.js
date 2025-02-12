import {userProfileController} from '../controllers/UserProfileController.js'
import { UploadhandleFile } from "../Utils/handlefile.js";
import express from 'express';
import { TokenVerify } from "../Utils/VerifyJwtToken.js";
import { handleerr } from "../Utils/wrapAsync.js";

const router=express.Router();


const UserPrfolileRoute=router.post("/profile",TokenVerify, UploadhandleFile , handleerr(userProfileController));
export{UserPrfolileRoute};
