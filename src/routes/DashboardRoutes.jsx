import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardHome from '../features/dashboard/pages/DashboardHome';
import MentorProfile from '../features/dashboard/pages/MentorProfile';
import MentorshipRequests from '../features/dashboard/pages/MentorshipRequests';
import DashboardProvider from '../features/dashboard/context/DashboardContext';

const DashboardRoutes = () => (
    <DashboardProvider>
        <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="mentor-profile" element={<MentorProfile />} />
            <Route path="mentorship-requests" element={<MentorshipRequests />} />
        </Routes>
    </DashboardProvider>
);

export default DashboardRoutes;
