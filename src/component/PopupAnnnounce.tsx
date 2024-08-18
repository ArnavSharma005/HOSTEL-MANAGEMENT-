import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopupAnnounceProps {
  announce: boolean;
  toggleAnnounce: () => void;
}

const PopupAnnounce: React.FC<PopupAnnounceProps> = ({ announce, toggleAnnounce }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } },
  };

  return (
    <AnimatePresence>
      {announce && (
        <motion.div
          className="popup-announce"
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
          <button
            className="absolute top-6 right-8 text-white py-1 px-2 text-lg rounded-lg border border-red-500 bg-red-500"
            onClick={toggleAnnounce}
          >
            Close
          </button>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-lg h-[40vh] w-[40vw]"
          >
            <div className="absolute z-20">
              <h2 className="text-2xl font-bold mb-4">Announcement</h2>
              <ul className="space-y-4">
                <li>
                  <label htmlFor="announcementTitle" className="block text-sm font-medium text-gray-700">
                    Announcement Title
                  </label>
                  <input
                    type="text"
                    id="announcementTitle"
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                    placeholder="Enter title..."
                  />
                </li>
                <li>
                  <label htmlFor="announcementDescription" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    id="announcementDescription"
                    rows={4}
                    className="mt-1 block w-full border-gray-300 shadow-sm focus:ring-custom-dark-blue focus:border-custom-dark-blue sm:text-sm rounded-md"
                    placeholder="Describe the announcement..."
                  ></textarea>
                </li>
                <li>
                  <button
                    onClick={toggleAnnounce}
                    type="button"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-custom-dark-blue hover:bg-custom-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-dark-blue"
                  >
                    Submit
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupAnnounce;
