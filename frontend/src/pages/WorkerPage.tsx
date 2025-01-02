import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

interface Worker {
  _id: string;
  name: string;
  email: string;
  mobile: string;
  role: string;
}

interface Issue {
  _id: string;
  IssueType: string;
  Description: string;
  isResolved: boolean;
  HostelNo: string;
  RoomNo: string;
}

const WorkerPage: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [assignedIssues, setAssignedIssues] = useState<Issue[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.role === 'admin') {
      fetchWorkers();
    } else if (user?.role === 'worker') {
      fetchAssignedIssues();
    }
  }, [user]);

  const fetchWorkers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/workers/all');
      setWorkers(response.data);
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };

  const fetchAssignedIssues = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/api/v1/worker/list-issues/${user?.id}`);
      setAssignedIssues(response.data.data.workAssigned);
    } catch (error) {
      console.error('Error fetching assigned issues:', error);
    }
  };

  const handleUpdateIssueStatus = async (issueId: string, otp: string) => {
    try {
      await axios.put('http://localhost:4000/api/v1/worker/update-issue-status/', { issueId, otp });
      fetchAssignedIssues();
    } catch (error) {
      console.error('Error updating issue status:', error);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            {user?.role === 'admin' ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Mobile
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Role
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {workers.map((worker) => (
                    <tr key={worker._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{worker.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{worker.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{worker.mobile}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {worker.role}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Issue Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {assignedIssues.map((issue) => (
                    <tr key={issue._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{issue.IssueType}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{issue.Description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${issue.isResolved ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                          {issue.isResolved ? 'Resolved' : 'Pending'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {!issue.isResolved && (
                          <button
                            onClick={() => {
                              const otp = prompt('Enter OTP to mark as resolved:');
                              if (otp) {
                                handleUpdateIssueStatus(issue._id, otp);
                              }
                            }}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Mark as Resolved
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerPage;

