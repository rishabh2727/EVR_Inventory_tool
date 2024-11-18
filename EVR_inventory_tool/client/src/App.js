import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login';
import Dashboard from './components/Dashboard';
import GHODashboard from './components/GHO';
import FRODashboard from './components/FRO';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Dashboard/GHO" element={<GHODashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
