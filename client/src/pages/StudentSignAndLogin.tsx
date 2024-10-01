import axios from 'axios';
import img from '../assets/student.jpg';
import { useState } from 'react';
//@ts-ignore
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const StudentSignAndLogin = () => {

const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    email: '',
    hostel: '',
    room: '',
    mobile: '',
    gender:'' ,
    password: '',
  }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
try {
    const res=await axios.post('http://localhost:4000/api/v1/student/signup',formData)
    Cookies.set('token', "student");
    console.log(res)
    Cookies.set('user', res.data.token);
    navigate('/Dashboard');
    console.log(res);
}
catch(err){
  console.log(err);
}
  };


  return (
    <div className='flex bg-black w-[50vw] absolute left-[25%] top-[5%]'>
    {/* Left side with image */}
    <div className='w-[50%]'>
      <img src={img} alt="Image" className='h-[86vh]' />
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
          <label>Roll:</label>
          <input 
            type="text" 
            name="roll" 
            value={formData.roll} 
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
          <label>Room:</label>
          <input 
            type="text" 
            name="room" 
            value={formData.room} 
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
  
        <div className='mb-4'>
          <label>Gender:</label>
          <select 
            name="gender" 
            value={formData.gender} 
            onChange={handleChange} 
            className='w-full p-2 rounded bg-gray-800 text-white' 
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
  
        <button type="submit" className='w-full p-2 bg-green-600 rounded'>Submit</button>
      </form>
    </div>
  </div>
  
  )
}

export default StudentSignAndLogin