import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const response = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB connected to ${response.connection.host}`);
  } catch (error) {
    console.log("error while connecting to mongoDB", error.message);
    process.exit(1);
  }
};
