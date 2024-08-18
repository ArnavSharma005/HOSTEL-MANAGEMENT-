import React, { useState } from 'react'
import { usePopup } from '../context api/toggle'
import PopupCard from './Cardpopup'
const Complaint = () => {
  const userType='worker'

const {isOpen,togglePopup}=usePopup()
  const render=()=>{
    if(userType=='student')
      {
        return(
          <>
         
         <li className='grid-cols-8 grid p-4 m-2 h-14 border-2 text-sm rounded-md border-custom-dark-blue'>
          <p>type</p>
          <p>hostel</p>
          <p className='col-span-3 '>description</p>
          <p>room no</p>
          <p>phone number</p>
          
        </li>
       
          </>
        )
      }
      else if(userType=='supervisor')
      {
        return(
        <>
        
         <li className='grid-cols-8 grid p-4 m-2 h-14 border-2 text-sm rounded-md border-custom-dark-blue'>
          <p>type</p>
          <p>hostel</p>
          <p className=' col-span-3 '>description</p>
          <p>room no</p>
          <p>phone number</p>
          <button className='bg-custom-orange rounded-[5px] py-1 hover:bg-custom-dark-blue hover:text-white ml-4 w-[60%] text-custom-dark-blue' onClick={togglePopup}>Assign</button>
        </li>
        <div className=''>
        <PopupCard isOpen={isOpen} togglePopup={togglePopup} />
        </div>
        
        
        </>
       
        )
      }
      else if(userType=='worker')
        {
          return(
          <>
          <li className='grid-cols-7 grid p-4 m-2 h-14 border-2 text-sm rounded-md border-custom-dark-blue'>
          
          <p>hostel</p>
          <p className='col-span-3 '>description</p>
          <p>room no</p>
          <p>phone number</p>
          <button type="button" className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2">Done</button>
        </li>
          </>
          )
        }
  
    }


  return (
    <div className='text-3xl font-bold'>{render()}</div>  )
}

export default Complaint