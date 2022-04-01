import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import authRouter from "./routes/auth-route.js"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()
dotenv.config()
const port = process.env.PORT || process.env.myPort || 5000;

app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use("/api/account", authRouter)

const start = async () => 
{
    try
    {
        await mongoose.connect(process.env.mongoDB)
        app.listen(port, () => console.log(`Server has been started in port ${port}... \n---------------------------------------`));
    }
    catch(e)
    {
        console.log("Server Error: ", e);
    }
}
start();