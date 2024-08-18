import React from 'react'


import Complaint from './Complaint'


const ComplaintList = () => {

 const Render=()=>
 {
const userType='student'
 
if(userType=='worker')
{
  return(
    <>
     <div className='ml-10 mt-12 h-[80vh] w-[68vw] rounded-xl bg-custom-gray'>
      <ul className='h-[100%] overflow-y-scroll '>
      <Complaint/><Complaint/><Complaint/><Complaint/>
      </ul>
    </div>
    </>
  )
}

else if(userType=='student' || userType=='supervisor')
{
  return(
    <>
     <div className='ml-10 mt-12 h-[30vh] w-[68vw] rounded-xl bg-custom-gray'>
      <ul className='h-[100%] overflow-y-scroll '>
      <Complaint/><Complaint/><Complaint/><Complaint/>
      </ul>
    </div>
    </>
  )
}
 }


  return (
    <>  
     {Render()}
    </>

  )
}

export default ComplaintList