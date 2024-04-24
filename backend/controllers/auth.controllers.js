import User from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async(req,res) =>{
    try {
        const {fullName, username, password, confirmPassword, gender} = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({error:"Passwords don't match"});
        }

        const user  =  await User.findOne({username});
        if (user) {
          return res.status(400).json({error:"User already exists!"});
        }

        //HASHING THE PASSWORD HERE
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);



        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const newUser = new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePicture: gender==="male"? boyProfilePic : girlProfilePic
        });

        if(newUser){
            // Generating JWT tokens
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save(); //to save it to db

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePicture: newUser.profilePicture
            });

        }else{
            res.status(400).json({error:"Check the user data"})
        }
    } catch (error) {
        console.log("Error in SignUp", error.message);
        res.status(500).json({error:"Server error"});
        return false;
    }
}

export const login = async(req,res) =>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: 'Invalid credentials'});
        }

        generateTokenAndSetCookie(user._id,res);

        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            username:user.username,
            profilePicture:user.profilePicture
        });


    } catch (error) {
        console.log("Login error", error.message);
        res.status(500).json({error:"Server Error"});
    }
}

export const logout = (req,res) =>{
    try {
        res.cookie("jwt","",{maxAge:0})
        res.status(200).json({message:'Logged out successfully'});
    } catch (error) {
        console.log("Logout error", error.message);
        res.status(500).json({error:"Server Error"});
    }
}