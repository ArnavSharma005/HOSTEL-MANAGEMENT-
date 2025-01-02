import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import AdminPage from './pages/AdminPage';
import IssuePage from './pages/IssuePage';
import WorkerPage from './pages/WorkerPage';
import StudentPage from './pages/StudentPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { AuthProvider, useAuth } from './context/AuthContext';
import './modal.css';

const ProtectedRoute: React.FC<{ element: React.ReactElement, allowedRoles?: string[] }> = ({ element, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return element;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
            <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} allowedRoles={['admin']} />} />
            <Route path="/issues" element={<ProtectedRoute element={<IssuePage />} />} />
            <Route path="/workers" element={<ProtectedRoute element={<WorkerPage />} allowedRoles={['admin', 'worker']} />} />
            <Route path="/students" element={<ProtectedRoute element={<StudentPage />} allowedRoles={['admin']} />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;

