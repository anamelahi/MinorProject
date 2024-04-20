import User from "../models/usermodel.js";

export const getUsersForSidebar = async (req,res) => {
    try {
        
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({_id:{ $ne: loggedInUserId }}).select("-password"); //this will display every user except the one logged in

        res.status(200).json(allUsers);
    } catch (error) {
        console.log("Error in getUserForSidebar: ", error.message);
        res.status(500).json({error:"Internal server error"});
    }
}