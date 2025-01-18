import { userProfileController } from "../controllers/userProfilecontroller.js";
import { UploadhandleFile } from "../Utils/handlefile.js";
import express from 'express';
import { TokenVerify } from "../Utils/VerifyJwtToken.js";
import { handleerr } from "../Utils/wrapasync.js";
const router=express.Router();


const UserPrfolileRoute=router.post("/profile",TokenVerify, UploadhandleFile , handleerr(userProfileController));
export{UserPrfolileRoute};
