import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './features/auth/pages/LoginPage';
import Signup from './features/auth/pages/SignupPage';
import Home from './features/Components/Home';
import DashboardRoutes from './routes/DashboardRoutes';
import InitialSign from './features/auth/pages/InitialSign';
import SignupMentor from './features/auth/pages/Signupmentor';
import LoginMentor from './features/auth/pages/LoginMentor';

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/loginMentor" element={<LoginMentor />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/initialSign" element={<InitialSign />} />
      <Route path="/signupmentor" element={<SignupMentor />} />
      <Route path="/dashboard/*" element={<DashboardRoutes />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
);

export default App;
