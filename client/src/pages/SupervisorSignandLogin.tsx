import React from 'react'
import img from '../assets/supervisor.png'
import { useState } from 'react'
//@ts-ignore
import Cookies from 'js-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const SupervisorSignandLogin = () => {
const navigate = useNavigate();
const [formData, setFormData] = useState({
  name: '',
  email: '',
  hostel: '',
  mobile: '',
  password: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  try {
    const res=await axios.post('http://localhost:4000/api/v1/admin/signup',formData)
    Cookies.set('token', "supervisor");
    Cookies.set('user', res.data.token);
    navigate('/Dashboard');
    console.log(res);
  }
  catch (err) {
    console.log(err);
  }
}




  return (
    <>
    <h2 className='text-5xl text-black text-center mt-[5vh] font-extrabold'>Sign up Admin</h2>
        <div className='flex bg-black w-[50vw] absolute left-[25%] top-[20%]'>
    {/* Left side with image */}
    <div className='w-[50%] bg-white'>
      <img src={img} alt="Image" className='h-[50vh]' />
    </div>
  
    {/* Right side with form */}
    <div className='w-[50%] flex flex-col justify-center p-5 text-white'>
      <form action="" onSubmit={handleSubmit}>
        
        <div className='mb-4'>
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            className='w-full p-2 rounded bg-gray-800 text-white' 
            required 
          />
        </div>
  
  
        <div className='mb-4'>
          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            className='w-full p-2 rounded bg-gray-800 text-white' 
            required 
          />
        </div>
  
        <div className='mb-4'>
          <label>Hostel:</label>
          <input 
            type="text" 
            name="hostel" 
            value={formData.hostel} 
            onChange={handleChange} 
            className='w-full p-2 rounded bg-gray-800 text-white' 
            required 
          />
        </div>
  
        <div className='mb-4'>
          <label>Mobile:</label>
          <input 
            type="text" 
            name="mobile" 
            value={formData.mobile} 
            onChange={handleChange} 
            className='w-full p-2 rounded bg-gray-800 text-white' 
            required 
          />
        </div>
  
        <div className='mb-4'>
          <label>Password:</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            className='w-full p-2 rounded bg-gray-800 text-white' 
            required 
          />
        </div>
  
  
        <button type="submit" className='w-full p-2 bg-green-600 rounded'>Submit</button>
      </form>
    </div>
  </div>
  </>

  )

}

export default SupervisorSignandLogin