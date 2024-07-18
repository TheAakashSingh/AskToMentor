import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './features/auth/pages/LoginPage';
import Signup from './features/auth/pages/SignupPage';
import Home from './features/Components/Home';
import DashboardRoutes from './routes/DashboardRoutes';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
