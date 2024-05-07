import mongoose from "mongoose";

export const connectDB = async (req, res) => {
    const db = process.env.MONGO_URL || 'mongodb+srv://hbarad:0S7n1EVV7xteYAvQ@cluster0.7ovz08h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

    const { connection } = await mongoose.connect(db, { useNewUrlParser: true });

    console.log(`MongoDB Connected to ${connection.host}`);

}