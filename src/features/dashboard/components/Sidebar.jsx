import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><Link to="/dashboard">Home</Link></li>
        <li><Link to="/dashboard/mentor-profile">Mentor Profile</Link></li>
        <li><Link to="/dashboard/mentorship-requests">Mentorship Requests</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;