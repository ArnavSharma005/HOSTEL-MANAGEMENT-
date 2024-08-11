
import studentModel from "../model/Student.js"
import Issue from "../model/Issue.js"

export const addIssue= async(req,res)=>{
    const {IssueType,Description,HostelNo,RoomNo,MobileNo,Otp}=req.body
    const newIssue = new Issue({
        IssueType,
        Description,
        HostelNo,
        RoomNo,
        MobileNo,
        Otp
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
        const issues = await Issue.find()
        res.status(200).json(issues)
    }catch(err){
        res.status(500).json(err)
    }
}
export const getIssueById= async(req,res)=>{
    const Issueid = req.params.id
    console.log(Issueid);
    try{
        const issue= await Issue.findById(Issueid);
        res.status(200).json(issue)
    }
    catch(err){
        res.status(500).json(err)
    }
        
}
