import Issue from "../model/Issue.js"
import Worker from "../model/Worker.js"
 //it will List all issues at once , (both resolved and un resolved)
export const listIssues = async (req,res)=>{
    try{
        const issues = await Issue.find();
        if(issues.length===0){
            res.status(404).json({message:"No issues found"})
        }

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

export const assignIssue= async(req,res)=>{
    const Issueid = req.params.id
    const {Workerid}=req.body;
    
    
    try{
        const issue= await Issue.findByIdAndUpdate(Issueid,{AssignedTo:Workerid,isAssigned:true},{new:true});
       
        if (!issue) {
            return res.status(404).json({ message: 'Issue not found' });
        }
        const worker= await Worker.findById(Workerid);
        
        if(!worker){
            return res.status(404).json({ message: 'Worker not found' });
        }
        worker.workAssigned.push(Issueid);
        await worker.save();
        res.status(200).json(issue)
    }
    catch(err){
        res.status(500).json(err)
    }
        
}   