import express from "express"
const userRouter = express.Router()

import {
  signupAdmin,
  signupStudent,
  loginAdmin,
  loginStudent,
} from "../controllers/userController.js"

userRouter.post("/student/signup", signupStudent)
userRouter.post("/student/login", loginStudent)
userRouter.post("/admin/signup", signupAdmin)
userRouter.post("/admin/login", loginAdmin)

export default userRouter
