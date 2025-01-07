import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_string);
    console.log("database connected");
  } catch (error) {
    console.log("Database error", error);
  }
};

export default connection;
