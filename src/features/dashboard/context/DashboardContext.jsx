import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => {
  return useContext(DashboardContext);
};

const DashboardProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [mentorshipRequests, setMentorshipRequests] = useState([]);

  return (
    <DashboardContext.Provider value={{ userData, setUserData, mentorshipRequests, setMentorshipRequests }}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
