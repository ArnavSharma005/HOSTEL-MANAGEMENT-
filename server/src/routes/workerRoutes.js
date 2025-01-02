import express from "express"

const workerRouter = express.Router()

// import worker controllers
import {
  listAssignedIssues,
  updateIssueStatus,
  getAllWorkers
} from "../controllers/workerController.js"

// routes

workerRouter.get("/worker/list-issues/:id", listAssignedIssues)

workerRouter.put("/worker/update-issue-status/", updateIssueStatus)
workerRouter.get("/worker/get-all-workers", getAllWorkers)
export default workerRouter
