import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import Modal from 'react-modal';

interface Issue {
  _id: string;
  IssueType: string;
  Description: string;
  isResolved: boolean;
  isAssigned: boolean;
  HostelNo: string;
  RoomNo: string;
  MobileNo: string;
  Student: string;
}

interface Worker {
  _id: string;
  name: string;
}

const IssuePage: React.FC = () => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [newIssue, setNewIssue] = useState({ IssueType: '', Description: '' });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [selectedWorker, setSelectedWorker] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchIssues();
    if (user?.role === 'admin') {
      fetchWorkers();
    }
  }, [user]);

  const fetchIssues = async () => {
    try {
      let response;
      if (user?.role === 'student') {
        response = await axios.get('http://localhost:4000/api/v1/student/listIssues');
      } else if (user?.role === 'admin') {
        response = await axios.get('http://localhost:4000/api/v1/supervisor/listIssues');
      }
      setIssues(response?.data || []);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const fetchWorkers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/workers/all');
      setWorkers(response.data);
    } catch (error) {
      console.error('Error fetching workers:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/v1/student/addIssue', newIssue);
      setNewIssue({ IssueType: '', Description: '' });
      fetchIssues();
    } catch (error) {
      console.error('Error adding issue:', error);
    }
  };

  const openAssignModal = (issue: Issue) => {
    setSelectedIssue(issue);
    setModalIsOpen(true);
  };

  const closeAssignModal = () => {
    setSelectedIssue(null);
    setSelectedWorker('');
    setModalIsOpen(false);
  };

  const handleAssign = async () => {
    if (!selectedIssue || !selectedWorker) return;

    try {
      await axios.put(`http://localhost:4000/api/v1/supervisor/assignIssue/${selectedIssue._id}`, { Workerid: selectedWorker });
      fetchIssues();
      closeAssignModal();
    } catch (error) {
      console.error('Error assigning issue:', error);
    }
  };

  return (
    <div className="flex flex-col">
      {user?.role === 'student' && (
        <form onSubmit={handleSubmit} className="mb-4">
          <select
            value={newIssue.IssueType}
            onChange={(e) => setNewIssue({ ...newIssue, IssueType: e.target.value })}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select Issue Type</option>
            <option value="Electrical">Electrical</option>
            <option value="Internet">Internet</option>
            <option value="Carpentry">Carpentry</option>
            <option value="Cleaning">Cleaning</option>
            <option value="Bullying">Bullying</option>
            <option value="Others">Others</option>
          </select>
          <textarea
            value={newIssue.Description}
            onChange={(e) => setNewIssue({ ...newIssue, Description: e.target.value })}
            placeholder="Description"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <button type="submit" className="mt-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Add Issue
          </button>
        </form>
      )}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hostel
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Room
                  </th>
                  {user?.role === 'admin' && (
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {issues.map((issue) => (
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {issue.HostelNo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {issue.RoomNo}
                    </td>
                    {user?.role === 'admin' && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {!issue.isAssigned && (
                          <button
                            onClick={() => openAssignModal(issue)}
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Assign
                          </button>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeAssignModal}
        contentLabel="Assign Worker"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl font-bold mb-4">Assign Worker to Issue</h2>
        <p className="mb-4">Issue Type: {selectedIssue?.IssueType}</p>
        <p className="mb-4">Description: {selectedIssue?.Description}</p>
        <select
          value={selectedWorker}
          onChange={(e) => setSelectedWorker(e.target.value)}
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select Worker</option>
          {workers.map((worker) => (
            <option key={worker._id} value={worker._id}>
              {worker.name}
            </option>
          ))}
        </select>
        <div className="mt-4 flex justify-end">
          <button
            onClick={handleAssign}
            className="mr-2 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Assign
          </button>
          <button
            onClick={closeAssignModal}
            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default IssuePage;

