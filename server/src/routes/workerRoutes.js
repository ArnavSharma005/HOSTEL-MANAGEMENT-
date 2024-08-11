import express from "express"

const workerRouter = express.Router()

// import worker controllers
import {
  listAssignedIssues,
  updateIssueStatus,
} from "../controllers/workerController.js"

// routes

workerRouter.get("/worker/list-issues/:id", listAssignedIssues)

workerRouter.put("/worker/update-issue-status/", updateIssueStatus)
export default workerRouter
