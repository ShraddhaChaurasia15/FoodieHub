import mongoose from "mongoose";

export const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI || 'mongodb+srv://foodiehub:987654321@cluster0.s3bzgro.mongodb.net/food-del';
    await mongoose.connect(mongoUri).then(() => console.log("DB Connected"));
}
