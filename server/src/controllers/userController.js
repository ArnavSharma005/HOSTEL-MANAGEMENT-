import studentModel from "../model/Student.js"
import adminModel from "../model/Admin.js"
import bcrypt from "bcryptjs"
//signup student

export const signupStudent = async (req, res) => {
  const { name, roll, email, hostel, room, mobile, password, gender } = req.body

  try {
    const existingStudent = await studentModel.findOne({ roll })

    if (existingStudent) {
      return res
        .status(400)
        .json({ msg: "Student already exists", error: true })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newStudent = new studentModel({
      name,
      roll,
      email,
      hostel,
      room,
      mobile,
      password: hashedPassword,
      gender,
    })

    const savedStudent = await newStudent.save()

    res.json({
      msg: "Student registered successfully",
      data: savedStudent,
      error: false,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: "Server Error" })
  }
}
//student login
export const loginStudent = async (req, res) => {
  const { roll, password } = req.body
  //checking if user exist or not
  try {
    const student = await studentModel.findOne({ roll })
    if (!student) {
      return res.status(400).json({ msg: "User not found", error: true })
    }
    //comparing password
    const isMatch = await bcrypt.compare(password, student.password)
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password", error: true })
    }
    res.json({ msg: "Login successful", data: student, error: false })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: "Server Error" })
  }
}
//admin signup

export const signupAdmin = async (req, res) => {
  const { name, email, hostel, mobile, password } = req.body
  //checking if admin already exist or not
  try {
    const existingAdmin = await adminModel.findOne({ email })
    if (existingAdmin) {
      return res.status(400).json({ msg: "Admin already exists", error: true })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newAdmin = new adminModel({
      name,
      email,
      hostel,
      mobile,
      password: hashedPassword,
    })
    const savedAdmin = await newAdmin.save()

    res.json({
      msg: "Admin registered successfully",
      data: savedAdmin,
      error: false,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: "Server Error" })
  }
}

//admin login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body
  //checking if user exist or not
  try {
    const admin = await adminModel.findOne({ email })
    if (!admin) {
      return res.status(400).json({ msg: "User not found", error: true })
    }
    //comparing password
    const isMatch = await bcrypt.compare(password, admin.password)
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid password", error: true })
    }
    res.json({ msg: "Login successful", data: admin, error: false })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: "Server Error" })
  }
}

//worker signup
