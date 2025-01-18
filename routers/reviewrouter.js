import express from "express";
import { reviewController, reviewDeleteController } from "../controllers/rviewcontroller.js";
import { validateReview } from "../Utils/Validatelistschema.js";
import {TokenVerify} from "../Utils/VerifyJwtToken.js";
import { handleerr } from "../Utils/wrapAsync.js";

const router=express.Router();

const creteReview=router.post("/:id/review", validateReview,TokenVerify,  handleerr(reviewController) );

const Reviewdelete=router.delete("/:id/reviews/:revid",handleerr(reviewDeleteController));
export{creteReview, Reviewdelete};