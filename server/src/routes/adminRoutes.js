import express from 'express';
const adminRouter = express.Router();
import { listIssues,getIssueById,assignIssue } from '../controllers/adminController.js';
adminRouter.get('/supervisor/listIssues',listIssues);
adminRouter.get('/supervisor/ListIssues/:id',getIssueById);
adminRouter.put('/supervisor/assignIssue/:id',assignIssue);


export default adminRouter;