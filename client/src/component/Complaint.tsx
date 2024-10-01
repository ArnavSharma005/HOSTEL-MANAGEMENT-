import React, { useState, useEffect } from 'react';
import { usePopup } from '../context api/toggle';
import Cookies from 'js-cookie';
import PopupCard from './Cardpopup';

const Complaint = (props) => {
  const [userType, setUserType] = useState('');
  const { isOpen, togglePopup } = usePopup();

  useEffect(() => {
    const token = Cookies.get("token");
    setUserType(token);
    console.log(token);
  }, []);

  const renderComplaintDetails = () => {
    const { IssueType, RoomNo, MobileNo, Description } = props; // Destructure props for easier access

    return (
      <li className='grid grid-cols-8 p-4 m-2 h-14 border-2 text-sm rounded-md border-custom-dark-blue'>
        <p>{IssueType}</p>
        <p>Room no: {RoomNo}</p>
        <p className='col-span-3'>{Description}</p>
        <p>{MobileNo}</p>
        {/* Conditional rendering of the button based on user type */}
        {userType === 'supervisor' && (
          <button
            className='bg-custom-orange rounded-[5px] py-1 hover:bg-custom-dark-blue hover:text-white ml-4 text-custom-dark-blue'
            onClick={togglePopup}
          >
            Assign
          </button>
        )}
        {userType === 'worker' && (
          <button
            type="button"
            className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
          >
            Done
          </button>
        )}
      </li>
    );
  };

  return (
    <div className='text-3xl font-bold'>
      {renderComplaintDetails()}
      <PopupCard isOpen={isOpen} togglePopup={togglePopup} />
    </div>
  );
};

export default Complaint;
