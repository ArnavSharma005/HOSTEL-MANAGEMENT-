import studentModel from "../model/Student.js"
import adminModel from "../model/Admin.js"
import workerModel from "../model/Worker.js"
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

//worker signup

export const signupWorker = async (req, res) => {
  const { name, email, mobile, password, role } = req.body
  //checking if admin already exist or not
  try {
    const existingWorker = await workerModel.findOne({ email })
    if (existingWorker) {
      return res.status(400).json({ msg: "Worker already exists", error: true })
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newWorker = new workerModel({
      name,
      email,
      mobile,
      password: hashedPassword,
      role,
    })
    const savedWorker = await newWorker.save()

    res.json({
      msg: "worker registered successfully",
      data: savedWorker,
      error: false,
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: "Server Error" })
  }
}

// login
export const login = async (req, res) => {
  const { email, password } = req.body
  //checking if user exist or not
  try {
    let worker, admin, student
    admin = await adminModel.findOne({ email })
    if (!admin) {
      worker = await workerModel.findOne({ email })
    }
    if (!admin && !worker) {
      if (/^\d+$/.test(email)) {
        student = await studentModel.findOne({ roll: email })
      } else {
        student = await studentModel.findOne({ email })
      }
    }

    if (!admin && !student && !worker) {
      //checking if exist in student

      return res.status(400).json({ msg: "User not found", error: true })
    }
    //comparing password
    if (admin) {
      const isMatch = await bcrypt.compare(password, admin.password)
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid password", error: true })
      }
      res.json({
        msg: "Login successful",
        data: { userData: admin, role: "admin" },
        error: false,
      })
    } else if (student) {
      const isMatch = await bcrypt.compare(password, student.password)
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid password", error: true })
      }
      res.json({
        msg: "Login successful",
        data: { userData: student, role: "student" },
        error: false,
      })
    } else if (worker) {
      const isMatch = await bcrypt.compare(password, worker.password)
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid password", error: true })
      }
      res.json({
        msg: "Login successful",
        data: { userData: worker, role: "worker" },
        error: false,
      })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ msg: "Server Error" })
  }
}

//worker signup
