import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import Complaint from './Complaint'; // Assuming Complaint is a component that accepts complaint props

export type ComplaintType = {
  IssueType: 'Electrical' | 'Internet' | 'Carpentry' | 'Cleaning' | 'Bullying' | 'Others';
  Description: string;
  isResolved: boolean;
  isAssigned: boolean;
  AssignedTo?: string;
  RoomNo: string;
  MobileNo: string;
  Otp: string;
  Student?: string;
};

const ComplaintList: React.FC = () => {
  const [userType, setUserType] = useState<string | null>(null);
  const [complaints, setComplaints] = useState<ComplaintType[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = Cookies.get("user");
    const user = Cookies.get("token") || null;
    setUserType(user);

    const getComplaints = async () => {
      if (!userType) return; // Prevent fetching if userType is not set

      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/${userType}/listIssues`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        setComplaints(response.data);
        console.log(response.data);
      } catch (err) {
        setError('Error fetching complaints');
        console.error(err);
      }
    };

    // Initial fetch
    getComplaints();

    // Call getComplaints every 5 seconds
    const intervalId = setInterval(getComplaints, 5000);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [userType]); // Added userType to the dependency array

  const Render = () => {
    if (error) {
      return <div className="text-red-500">{error}</div>; // Display error message if it exists
    }

    if (userType === 'worker') {
      return (
        <div className='ml-10 mt-12 h-[80vh] w-[68vw] rounded-xl bg-custom-gray'>
          <ul className='h-full overflow-y-scroll'>
            {complaints.map((complaint, idx) => (
              <li key={idx}>
                <Complaint {...complaint} />
              </li>
            ))}
          </ul>
        </div>
      );
    } else if (userType === 'student' || userType === 'supervisor') {
      return (
        <div className='ml-10 mt-12 h-[30vh] w-[68vw] rounded-xl bg-custom-gray'>
          <ul className='h-full overflow-y-scroll'>
            {complaints.map((complaint, idx) => (
              <li key={idx}>
                <Complaint {...complaint} />
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return null; // Return null if no user type matches
  };

  return (
    <>
      {Render()}
    </>
  );
};

export default ComplaintList;