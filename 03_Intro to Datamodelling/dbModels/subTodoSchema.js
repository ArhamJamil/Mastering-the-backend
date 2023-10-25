import mongoose from "mongoose";

const subTodo = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


}, {timestamps: true})

export const subtodo = mongoose.model("SubTodos", subTodo)