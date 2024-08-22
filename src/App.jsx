import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Getin from './components/Getin';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Getin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Default route - redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
