
import studentModel from "../model/Student.js"
import Issue from "../model/Issue.js"

export const addIssue= async(req,res)=>{
    const {IssueType,Description,HostelNo,RoomNo,MobileNo,Otp,Student}=req.body
    const newIssue = new Issue({
        IssueType,
        Description,
        HostelNo,
        RoomNo,
        MobileNo,
        Otp,
        Student
    })
    try{
        const savedIssue = await newIssue.save()
        res.status(201).json(savedIssue)
    }catch(err){
        res.status(500).json(err)
    }
}
export const listIssues= async(req,res)=>{
    try{
        const issues = await Issue.find({Student:req.body.Student});
        res.status(200).json(issues)
    }catch(err){
        res.status(500).json(err)
    }
}
export const getIssueById= async(req,res)=>{
    const Issueid = req.params.id
   // console.log(Issueid);
    try{
        const issue= await Issue.findById(Issueid);
        if (!issue) {
            return res.status(404).json({ message: 'Issue not found' });
        }

        res.status(200).json(issue)
    }
    catch(err){
        res.status(500).json(err)
    }
        
}
