import mongoose from "mongoose";
const MONGO_DB_URI = "mongodb+srv://anamelahi04:ES0bYX6nEJ7condy@cluster0.fsapew7.mongodb.net/minor-project-db?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongoDB = async()=>{
    try {
        // await mongoose.connect(process.env.MONGO_DB_URI,);
        await mongoose.connect(MONGO_DB_URI)
        console.log("connected to MongoDB");
    } catch (error) {
        console.log("Error in db connection",error.message)
    }
};

export default connectToMongoDB;