import mongoose from "mongoose"

const userScheme = new mongoose.Schema({
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    nickname: { type: String, default: "" },
    verified: { type: String, default: false },
    verificationLink: { type: String, required: true },
    level: { type: String, default: "low" }
})

export const USER = mongoose.model("Users", userScheme)