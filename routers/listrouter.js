import express  from "express";
import { handleerr } from "../Utils/wrapasync.js";
import { createListController, destroyListController, editListController, showListByIdController, showListcontroller, showListeditByIdController } from "../controllers/listcontroller.js";
import { validatelist } from "../Utils/Validatelistschema.js";
import { TokenVerify } from "../Utils/VerifyJwtToken.js";
import { UploadhandleFile } from "../Utils/handlefile.js";

const router=express.Router();

const createList=router.post("/new",TokenVerify,UploadhandleFile,validatelist,  handleerr(createListController));

const showList=router.get("/", handleerr(showListcontroller));

const showListById=router.get("/:id", handleerr(showListByIdController));

const showeditListById=router.get("/list/:id", handleerr(showListeditByIdController));

const editList=router.put("/edit/:id",UploadhandleFile, validatelist, handleerr(editListController));

const destroyList=router.delete("/id",handleerr(destroyListController))

export{createList, showList, showListById, destroyList, editList, showeditListById};