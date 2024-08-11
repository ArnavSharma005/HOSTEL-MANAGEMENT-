import express from "express"
const userRouter = express.Router()

import {
  signupAdmin,
  signupStudent,
  signupWorker,
  login,
} from "../controllers/userController.js"

userRouter.post("/student/signup", signupStudent)

userRouter.post("/admin/signup", signupAdmin)
userRouter.post("/worker/signup", signupWorker)
userRouter.post("/login", login)

export default userRouter
