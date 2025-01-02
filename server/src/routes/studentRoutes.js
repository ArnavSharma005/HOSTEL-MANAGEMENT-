import express from 'express';
import {addIssue,listIssues,getIssueById} from '../controllers/studentController.js'
import {jwtAuthMiddleware} from '../config/jwt.js'
 const StudentRouter = express.Router();

StudentRouter.post('/student/addIssue',jwtAuthMiddleware,addIssue);
StudentRouter.get('/student/listIssues',jwtAuthMiddleware,listIssues);
StudentRouter.get('/student/listIssues/:id',jwtAuthMiddleware,getIssueById);
StudentRouter.get('/student/getAllStudents',jwtAuthMiddleware,getAllStudents);

export default StudentRouter;