import workerModel from "../model/Worker.js"
import issueModel from "../model/Issue.js"
//function to list the all issues assigned to a worker

export const listAssignedIssues = async (req, res) => {
  try {
    const issues = await workerModel
      .findById(req.params.id)
      .populate("workAssigned")
    if (!issues) return res.status(404).json({ message: "worker not found" })
    res.status(200).json({
      data: issues,
      error: false,
      message: "Issues fetched successfully",
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

//function to update the status of an issue assigned to a worker

export const updateIssueStatus = async (req, res) => {
  const { issueId, otp } = req.body
  try {
    const issue = await issueModel.findById(issueId)
    if (otp !== issue.Otp) {
      return res.status(401).json({ message: "Invalid OTP", error: true })
    }
    const updatedIssue = await issueModel.findByIdAndUpdate(
      issueId,
      { $set: { isResolved: true } },
      { new: true }
    )
    if (!updatedIssue)
      return res.status(404).json({ message: "issue not found" })
    res.status(200).json({
      data: updatedIssue,
      error: false,
      message: "Issue status updated successfully",
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
