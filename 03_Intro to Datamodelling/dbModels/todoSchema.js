import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    isCompleted: {
        type: Boolean,
        default: false
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    subTodos: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "SubTodos"
        }
    ] // Array of sub todos, data will come from moongose.model(<nameofdocument> which is acting as ref)

},{timestamps: true})


export const Todo = mongoose.model("Todo", todoSchema)