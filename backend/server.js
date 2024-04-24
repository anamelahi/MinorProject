import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors'; // Import cors middleware
import authRoutes from "./routes/auth.routes.js"
import messageRoutes  from './routes/message.routes.js'
import userRoutes  from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
// dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json()); // Middleware for parsing JSON bodies from req.body
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })



app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`server running at ${PORT}`)
});