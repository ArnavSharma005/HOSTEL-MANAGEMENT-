import mongoose from "mongoose"

const workerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: [
      "Electrical",
      "Internet",
      "Carpentry",
      "Cleaning",
      "Bullying",
      "Others",
    ],
    required: true,
  },

  workAssigned: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
    },
  ],
  workCompleted: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Issue",
      required: true,
    },
  ],
})

const workerModel = mongoose.model("Worker", workerSchema)
export default workerModel
