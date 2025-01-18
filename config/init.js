import {} from "dotenv/config";
import mongoose from "mongoose";

async function connectTodb() {
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("connect to db");
    }catch (err){
        console.log("error in init db : ", err);
    }
}

export {connectTodb};
