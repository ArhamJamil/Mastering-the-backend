import mongoose from "mongoose"

const medicalReportSchema = new mongoose.Schema({}, {timestamps: true})

export const medicalReport = mongoose.model("medicalReport", medicalReportSchema)