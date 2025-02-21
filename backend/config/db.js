import mongoose from "mongoose";
export const connectDB = async ()=>{
    (await mongoose.connect('mongodb+srv://greatstack:753012@cluster0.szdzv6e.mongodb.net/food-del')).isObjectIdOrHexString(()=>console.log("DB Connected"));
}