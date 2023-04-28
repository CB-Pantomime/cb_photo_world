
import mongoose from "mongoose";
import dotenv from 'dotenv';
import gradient from 'gradient-string';

dotenv.config();

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(gradient.atlas(
            `***** MongoDB Connected: ${conn.connection.host} *****`
        ));
    } catch (error) {
        console.error(
            gradient.passion(
                `Error: ${error.message}`
            ));
    }
};

export default connectDB;