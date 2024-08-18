import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios' // Make sure to import axios if you are using it

const Navbar = () => {
  const [userType, setUserType] = useState('student')

  // useEffect(() => {
  //   const fetch = async () => {
  //     // Fetch user type from the API
  //     const { data } = await axios.get('') // Replace with your API endpoint
  //     setUserType(data.userType)
  //   }
  //   fetch()
  // }, [])

  const RenderNavbar = () => {
    if (userType === 'student') {
      return (
        <>
          <Link to='/dashboard'>
            <li className='border-y-2 p-3 hover:bg-blue-600'>Dashboard</li>
          </Link>
          {/* <Link to='/emergency'>
            <li className='border-y-2 p-3 hover:bg-blue-600'>Emergency</li>
          </Link> */}
          <Link to='/announcement'>
            <li className='border-y-2 p-3 hover:bg-blue-600'>Announcement</li>
          </Link>
        </>
      )
    }

    if (userType === 'supervisor') {
      return (
        <>
          <Link to='/dashboard'>
            <li className='border-y-2 p-3 hover:bg-blue-600'>Dashboard</li>
          </Link>
          <Link to='/workers'>
            <li className='border-y-2 p-3 hover:bg-blue-600'>Workers</li>
          </Link>
        </>
      )
    }

    if (userType === 'worker') {
      return (
        <>
          <Link to='/dashboard'>
            <li className='border-y-2 p-3 hover:bg-blue-600'>Dashboard</li>
          </Link>
          
        </>
      )
    }
  }

  return (
    <div className='w-[25vw] h-[100vh] bg-black'>
      <ul className='list-none text-white font-bold text-xl'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH_mmHeF2cITuDKJsqmEqdNgd5MLiNxHJWtg&s" alt="Profile" className='h-[30vh] rounded-[50%] ml-[4vw] my-[3vw]' />
        {RenderNavbar()}
      </ul>
    </div>
  )
}

export default Navbar
