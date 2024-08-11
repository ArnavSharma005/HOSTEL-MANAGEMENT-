import express from 'express';
import {addIssue,listIssues,getIssueById} from '../controllers/studentController.js'
 const StudentRouter = express.Router();

StudentRouter.post('/student/addIssue',addIssue);
StudentRouter.get('/student/listIssues',listIssues);
StudentRouter.get('/student/listIssues/:id',getIssueById);

export default StudentRouter;