import { Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Dashboard from './pages/Dashboard'
import Announcement from './pages/Announcement'
import Workers from './pages/Workers'
import Home from './pages/Home'
import WorkerSignAndLogin from './pages/WorkerSignandLogin'
import StudentSignAndLogin from './pages/StudentSignAndLogin'
import React from 'react'
import SupervisorSignAndLogin from './pages/SupervisorSignandLogin'
const App = () => {


  return (
    <Routes>
      
    <Route path='/login-worker' element={<WorkerSignAndLogin/>}></Route>
    <Route path='/login-supervisor' element={<SupervisorSignAndLogin/>}></Route>

      <Route path='/dashboard' element={<div className='flex'>
        <Navbar></Navbar>
        <Dashboard></Dashboard>
        
      </div>}></Route>

        <Route path='/login-student' element={
         <StudentSignAndLogin></StudentSignAndLogin>}></Route>

     <Route path='/' element={
      <Home/>
     }></Route>

     <Route path='/workers' element={<div className='flex'>
        <Navbar></Navbar>
        <Workers/>
      </div>}></Route>

      <Route path='/announcement' element={<div className='flex'>
        <Navbar></Navbar>
        <Announcement/>
      </div>}></Route>
    </Routes>
  )
}

export default App