import mongoose from "mongoose";

import * as dotenv from "dotenv";
dotenv.config();

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB connection sucessful");
  } catch {
    console.log("Connection failed.");
  }
}

connectDB();
