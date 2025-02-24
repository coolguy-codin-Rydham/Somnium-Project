import mongoose from "mongoose";
import {config} from "dotenv"
config();
const connectDb = ()=>{
    try{
        mongoose.connect(process.env.MONGO_URI, {})
        console.log("Mongo Connected");
    }
    catch(e){
        console.log("Mongo Error");
    }
}

export default connectDb;