import User from "../models/userModel.js";
import bcrypt from "bcrypt";
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please enter all fields");
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
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
  } catch (error) {}
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400);
      throw new Error("Please enter all fields");
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400);
      throw new Error("User does not exist");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      res.status(400);
      throw new Error("Invalid credentials");
    }
    res.status(200).json(user);
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: error.message });
  }
};

