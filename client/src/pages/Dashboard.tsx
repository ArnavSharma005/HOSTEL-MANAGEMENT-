import React, { useEffect, useState } from 'react'
import ComplaintList from '../component/ComplaintList'
import PopupCard from '../component/Cardpopup'
import { usePopup } from '../context api/toggle'
import PopupAnnounce from '../component/PopupAnnnounce'
import Emergency from '../component/Emergency'
const Dashboard = () => {
const {isOpen,togglePopup,toggleAnnounce,emergency,announce,toggleEmergency}=usePopup()
  const [userType,setUserType]=useState('student')
  const [Complaints,setComplaints]=useState([{}])
  useEffect(() => {
    
  const fetch=async()=>{
   const UserData=await axios.get('')
   setUserType(UserData.data.userType)
   if(userType=='student')
   {
    const data=await axios.get('')
    setComplaints(data.Complaints)
   }
  }
  fetch()
  }, [])

  
  
  const RenderDashboard=()=>{
    if(userType=='student')
    {
      return(
        <>
         <button type="button" className="text-white absolute font-bold text-custom-dark-blue   top-8 right-[16vw] bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br   rounded-lg  p-2 text-center me-2 mb-2" onClick={toggleEmergency}>Emergency</button>
        <button className='absolute top-8 right-10 text-custom-dark-blue bg-custom-gray p-2 rounded-md' onClick={togglePopup}> Complaint</button>
        <div className={` ${isOpen||emergency ? 'blur' : ''}`}>
       <div className={`h-[50vh]  w-[75vw] bg-custom-dark-blue`}>
        <p className='text-custom-orange pl-10 text-5xl pt-10'>Pending Complaints</p>
        <ComplaintList></ComplaintList>
       </div>

       <div className={`h-[50vh]  w-[75vw] bg-custom-dark-blue`}>
        <p className='text-custom-orange pl-10 text-5xl pt-10'>Resolved Complaints</p>
        <ComplaintList></ComplaintList>
       </div>
       
       </div>

        <Emergency emergency={emergency} toggleEmergency={toggleEmergency}/>


       <PopupCard isOpen={isOpen} togglePopup={togglePopup} />
        

        </>

      )
    }
    else if(userType=='supervisor')
    {
      return(
      <>
       
       <div className={` ${announce ? 'blur' : ''}`}>
       <div className={`h-[50vh]  w-[75vw] bg-custom-dark-blue`}>
       <button className='absolute top-10 right-12 bg-custom-gray py-2 px-4 rounded-xl text-custom-dark-blue' onClick={toggleAnnounce}>Announce</button>
        <p className='text-custom-orange pl-10 text-5xl pt-10'>Pending Complaints</p>
        <ComplaintList></ComplaintList>
       </div>

       <div className={`h-[50vh]  w-[75vw] bg-custom-dark-blue`}>
        <p className='text-custom-orange pl-10 text-5xl pt-10'>Resolved Complaints</p>
        <ComplaintList></ComplaintList>
       </div>
       </div>
       <PopupAnnounce announce={announce} toggleAnnounce={toggleAnnounce}/>
       
      </>
     
      )
    }
    else if(userType=='worker')
      {
        return(
        <>
         <button className='absolute top-8 right-10 text-custom-dark-blue bg-custom-gray p-2 rounded-md' onClick={togglePopup}> Leave</button>
        <div className={` ${isOpen ? 'blur' : ''}`}>
       <div className={`h-[100vh]  w-[75vw] bg-custom-dark-blue`}>
        <p className='text-custom-orange pl-10 text-5xl pt-10'> Complaints</p>
        <ComplaintList></ComplaintList>
       </div>

   
       </div>
       <PopupCard isOpen={isOpen} togglePopup={togglePopup} />
        </>
        
        )
      }

  }


  return (
    <div className='text-3xl font-bold'>{RenderDashboard()}</div>
  )
}

export default Dashboard