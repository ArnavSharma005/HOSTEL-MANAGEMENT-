import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopupCardProps {
  isOpen: boolean;
  togglePopup: () => void;
}

const PopupCard: React.FC<PopupCardProps> = ({ isOpen, togglePopup }) => {



  const cardRef = useRef<HTMLDivElement | null>(null);
  const userType = 'worker'; // Change this to 'worker' or 'supervisor' to test different cases

 

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="popup-card"
          ref={cardRef}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: 'fixed',
            top: '20%',
            left: '45%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            zIndex: 1000,
          }}
        >
         <button className='absolute top-6 right-8 text-white py-1 px-2 text-lg rounded-lg border border-red-500 bg-red-500 ' onClick={togglePopup}>close</button>
          <motion.div  
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg min-h-[40vh]  w-[40vw]"
          >
           
            {userType === 'student' && (
              <>
                <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
                <button className='absolute top-6 right-8 text-white py-1 px-2 text-lg rounded-lg border border-red-500 bg-red-500 ' onClick={togglePopup}>close</button>
                <ul className="space-y-4">
                  <li>
                    <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                      Issue Type
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                    >
                      <option value="Electrical">Electrical</option>
                      <option value="Internet">Internet</option>
                      <option value="Carpentry">Carpentry</option>
                      <option value="Cleaning">Cleaning</option>
                      <option value="Bullying">Bullying</option>
                      <option value="Others">Others</option>
                    </select>
                  </li>
                  <li>
                    <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      id="issueDescription"
                      name="issueDescription"
                      rows="4"
                      className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                      placeholder="Describe the issue..."
                    ></textarea>
                  </li>
                  <li>
                    <button
                      onClick={togglePopup}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custom-dark-blue hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-dark-blue"
                    >
                      Submit
                    </button>
                  </li>
                </ul>
              </>
            )}
            {userType === 'worker' && (
             <>
             <h2 className="text-2xl font-bold mb-4">Apply for Leave</h2>
             <button className='absolute top-6 right-8 text-white py-1 px-2 text-lg rounded-lg border border-red-500 bg-red-500 ' onClick={togglePopup}>close</button>
             <ul className="space-y-4">
               
               <li>
                 <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                   Leave Type
                 </label>
                 <select
                   id="type"
                   name="type"
                   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                 >
                   <option value="Sick Leave">Sick Leave</option>
                   <option value="Casual Leave">Casual Leave</option>
                   <option value="Paid Leave">Paid Leave</option>
                 </select>
               </li>
               <li>
                 <label htmlFor="days" className="block text-sm font-medium text-gray-700">
                   Number of Days
                 </label>
                 <input
                   id="days"
                   name="days"
                   type="number"
                   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                   placeholder="Enter number of days"
                 />
               </li>
               <li>
                 <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                   From Date
                 </label>
                 <input
                   id="from"
                   name="from"
                   type="date"
                   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                 />
               </li>
               <li>
                 <label htmlFor="to" className="block text-sm font-medium text-gray-700">
                   To Date
                 </label>
                 <input
                   id="to"
                   name="to"
                   type="date"
                   className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                 />
               </li>
               <li>
                 <button
                   onClick={togglePopup}
                   type="button"
                   className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custom-dark-blue hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-dark-blue"
                 >
                   Submit
                 </button>
               </li>
             </ul>
           </>
           
            )}
            {userType === 'supervisor' && (
              <>
              <div className='absolute z-20'>
                
                <h2 className="text-2xl font-bold mb-4">Assign Issue</h2>
                
                <ul className="space-y-4">
                  <li>
                    <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                      Worker
                    </label>
                    <select
                      id="issueType"
                      name="issueType"
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                    >
                      <option value="arnav">Arnav Sharma(plumber)</option>
                      <option value="shubham">Shubham(Carpentry)</option>
                      <option value="suyash">Suyash shukla(Electrician)</option>
                      
                      
                    </select>
                  </li>
                  <li>
                    <label htmlFor="issueDescription" className="block text-sm font-medium text-gray-700">
                      Due Date:
                    </label>
                   <input type="date" name="" id="" value={new Date().toISOString().split('T')[0]} className='h-[20px] text-sm' />
                  </li>
                  <li>
                    <button
                      onClick={togglePopup}
                      type="button"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custom-dark-blue hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-dark-blue"
                    >
                      Submit
                    </button>
                  </li>
                </ul>
                </div>
              </>
            )}
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupCard;