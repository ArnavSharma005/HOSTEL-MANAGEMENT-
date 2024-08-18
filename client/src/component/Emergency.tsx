import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmergencyProps {
  emergency: boolean;
  toggleEmergency: () => void;
}

const Emergency: React.FC<EmergencyProps> = ({ emergency,  toggleEmergency}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {emergency && (
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
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: '#fff',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            zIndex: 1000,
          }}
        >
          <button
            className="absolute top-6 right-8 text-white py-1 px-2 text-lg rounded-lg border border-red-500 bg-red-500"
            onClick={toggleEmergency}
          >
            Close
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg min-h-[40vh] w-[40vw]"
          >
            <h2 className="text-2xl font-bold mb-4">Report an Emergency</h2>
            <ul className="space-y-4">
              <li>
                <label htmlFor="emergencyType" className="block text-sm font-medium text-gray-700">
                  Emergency Type
                </label>
                <select
                  id="emergencyType"
                  name="emergencyType"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  <option value="Medical">Medical</option>
                  <option value="Fire">Fire</option>
                  <option value="Assault">Assault</option>
                  <option value="Accident">Accident</option>
                  <option value="Other">Other</option>
                </select>
              </li>
              
               
              <li>
                <button
                  onClick={toggleEmergency}
                  type="button"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Report
                </button>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Emergency;
