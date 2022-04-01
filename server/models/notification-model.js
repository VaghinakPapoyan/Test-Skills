import mongoose from "mongoose"

const notificationScheme = new mongoose.Schema({
    userId: { ref: "Users", type: mongoose.Schema.Types.ObjectId },
    title: { type: String },
    text: { type: String, required: true },
    href: { type: String },
    date: { type: Date }
})

export const NOTIFICATIONS = mongoose.model("Notification", notificationScheme)