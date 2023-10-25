import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password:{
        type: String,
        required: [true, "password is required"] // first index is the property value , 2nd index is the custom message
    }
    
}, {timestamps:true}

)

export const User = mongoose.model("User", userSchema)