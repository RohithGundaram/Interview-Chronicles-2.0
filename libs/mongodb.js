import mongoose, { mongo } from "mongoose";

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://rohithgundaram:FWw1u2VXXzsxYgbw@cluster0.msplvac.mongodb.net/IC_db");
        console.log("Connected to db sucessfully.");
    }
    catch(err){
        console.log(err);
    }
}

export default connectToMongoDB;