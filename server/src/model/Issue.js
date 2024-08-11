import mongoose from "mongoose"
const IssueSchema = new mongoose.Schema({
  IssueType: {
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
  Description: {
    type: String,
    required: true,
  },
  isResolved: {
    type: Boolean,
    default: false,
  },
  isAssigned: {
    type: Boolean,
    default: false,
  },
  AssignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Worker",
  },
  HostelNo: {
    type: String,
    required: true,
  },
  RoomNo: {
    type: String,
    required: true,
  },
  MobileNo: {
    type: String,
    required: true,
  },
  Otp: {
    type: String,
    default: "123",
    //required: true,
  },
})

const Issue = mongoose.model("Issue", IssueSchema)
export default Issue
