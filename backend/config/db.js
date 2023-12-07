import mongoose from "mongoose";
const Db_Name = "shopify"

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(`${process.env.MONGO_URI}/${Db_Name}`);
        console.log("MongoDB Connected succeessfully! ")
    }catch(error){
        console.log(`Error : ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;