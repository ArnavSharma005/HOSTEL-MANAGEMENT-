import express from 'express';
const adminRouter = express.Router();
import { listIssues,getIssueById,assignIssue , getAllWorkers} from '../controllers/adminController.js';
adminRouter.get('/supervisor/listIssues',listIssues);
adminRouter.get('/supervisor/ListIssues/:id',getIssueById);
adminRouter.put('/supervisor/assignIssue/:id',assignIssue);
adminRouter.get('/supervisor/getAllWorkers',getAllWorkers);

export default adminRouter;