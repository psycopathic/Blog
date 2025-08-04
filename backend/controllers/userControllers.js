import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password){
            res.status(400);
            throw new Error("Please enter all fields");
        }
        const existingUser = await User.findOne({email});
        if(existingUser){
            res.status(400);
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });
        res.status(201).json(user);

    } catch (error) {
        
    }

};