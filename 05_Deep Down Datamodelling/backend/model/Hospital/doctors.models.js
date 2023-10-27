import mongoose from "mongoose"

const hoursInHospital = new mongoose.Schema({
    Hours: {
        type: String,
    }
})

const doctorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required: true
    },

    qualification:{
        type: String,
        required: true
    },

    experience:{
        type: Number,
        default: 0
    },

    worksInHospitals: {
        type:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Hospital",
                hoursSpend: hoursInHospital
            }
        ]
    }, 


}, {timestamps: true})

export const Doctor = mongoose.model("Doctor", doctorsSchema)