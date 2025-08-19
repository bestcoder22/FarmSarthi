import mongoose from "mongoose";
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error in connecting to MongoDB", error);
  }
};

export default connectToMongoDB;
