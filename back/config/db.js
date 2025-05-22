import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://AHgPEu_6po:12Yunior3@cluster0.sbc9h2n.mongodb.net/food-del').then(()=>console.log("DB connected"));
}