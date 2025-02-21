import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    cartData:{type:Object,default:{}}
},{minimize:false})
//minimize:false this show that if use not filled nay thing dont remove that part show it has empty

const userModel = mongoose.models.user || mongoose.model("user",userSchema)
// mongoose.model("user",userSchema) creating new model name user 
export default userModel;