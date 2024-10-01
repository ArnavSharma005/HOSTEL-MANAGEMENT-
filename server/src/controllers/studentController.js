import Issue from "../model/Issue.js"

export const addIssue= async(req,res)=>{
    const HostelNo = req.user.hostel;
    const Student = req.user.id;
    const RoomNo = req.user.room;
    const MobileNo = req.user.mobile;
    const {IssueType,Description}=req.body
    const newIssue = new Issue({
        IssueType,
        Description,
        HostelNo,
        RoomNo,
        MobileNo,
        Student
    })
    try{
        const savedIssue = await newIssue.save()
        res.status(201).json(savedIssue)
        console.log(savedIssue)
    }catch(err){
        res.status(500).json(err)
    }
}
export const listIssues= async(req,res)=>{
    try{
        const issues = await Issue.find({Student:req.user.id});
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
