//this will be the main file for the server
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
//load the env variabl
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.port || 4000
//dbb connection
import connectDB from "./src/config/db.js"
connectDB()

//user routes
import userRouter from "./src/routes/userRoutes.js"
app.use("/api/v1", userRouter)

//student routes
import StudentRouter from "./src/routes/studentRoutes.js"
app.use("/api/v1", StudentRouter)

//worker routes

import workerRouter from "./src/routes/workerRoutes.js"
app.use("/api/v1", workerRouter)

app.get("/", (req, res) => {
  res.send("Welcome to the Hostel Management System")
})
app.listen(PORT, () => {
  console.log("Server is listening on port", PORT)
})
