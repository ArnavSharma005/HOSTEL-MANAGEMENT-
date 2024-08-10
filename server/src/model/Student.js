const mongoose=require("mongoose");
const StudentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    roll:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    hostel:{
        type:String,
        required:true
    },
    room:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
    type: String,
    enum: ['male', 'female', 'others'],
    default:'male'
    },
    issue:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Issue",
        required:true
    }]    
})

const Student=mongoose.model("Student",StudentSchema);
module.exports=Student;