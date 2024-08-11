import express from 'express';
const adminRouter = express.Router();
import { listIssues,getIssueById,assignIssue } from '../controllers/adminController.js';
adminRouter.get('/admin/ListIssues',listIssues);
adminRouter.get('/admin/ListIssues/:id',getIssueById);
adminRouter.put('/admin/assignIssue/:id',assignIssue);

export default adminRouter;