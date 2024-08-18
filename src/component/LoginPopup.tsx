import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import img from '../assets/student.jpg';
import img2 from '../assets/Admin-bro.svg';
import img3 from '../assets/technician.png';

interface LoginPopupProps {
  isLogin: boolean;
  toggleLogin: () => void;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ isLogin, toggleLogin }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  const loginOptions = [
    { type: 'Student', imgSrc: img ,link:'/login-student'},
    { type: 'Worker', imgSrc: img3 ,link:'/login-worker'},
    { type: 'Supervisor', imgSrc: img2 ,link:'/login-supervisor'},
  ];

  return (
    <AnimatePresence>
      {isLogin && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
       
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg w-[80vw] max-w-[500px] flex flex-col items-center"
            style={{
              background: '#fff',
              padding: '20px',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '8px',
            }}
          >
            <button
              className="absolute top-4 right-4 text-white py-1 px-2 text-lg rounded-lg border border-red-500 bg-red-500"
              onClick={toggleLogin}
            >
              Close
            </button>


            <h2 className="text-2xl font-bold mb-4 text-center">Select Your Role</h2>
            <div className="grid grid-cols-3 gap-4">
              {loginOptions.map((option, index) => (

                <a href={option.link}>
                <div
                  key={index}
                  className="role-option relative flex flex-col items-center bg-gray-100 rounded-lg shadow hover:shadow-md transition cursor-pointer"
                  // onClick={handleRoleSelection} // Add your role selection handler here
                >
                  <img
                    src={option.imgSrc}
                    alt={option.type}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <p className="relative z-10 mt-2 bottom-2 text-black font-bold">{option.type}</p>
                </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoginPopup;
