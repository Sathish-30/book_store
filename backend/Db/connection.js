import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async() => {
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    }catch(err){
        console.log("Failed to connect to DB");
    }
}

export default connect;