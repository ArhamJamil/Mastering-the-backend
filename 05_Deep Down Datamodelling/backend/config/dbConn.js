import mongoose from "mongoose";
import "dotenv/config";

const databaseString = process.env.MONGO_CONN_URL

const connectDB = async () => {
  try {
    await mongoose.connect(databaseString);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB
