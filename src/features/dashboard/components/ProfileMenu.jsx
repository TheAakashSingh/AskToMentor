import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Alert, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';

const ProfileMenu = () => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const [userName, setUserName] = useState('');
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleProfileDetails = () => {
    setShowProfileDetails(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (profileRef.current && !profileRef.current.contains(event.target)) {
      setShowProfileDetails(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // useEffect(() => {
  //   // Get user data from localStorage
  //   const token = localStorage.getItem('token');
  //   const userData = localStorage.getItem('userData');

  //   if (!token || !userData) {
  //     navigate('/login'); // Redirect if no token or user data
  //     return;
  //   }

  //   try {
  //     const parsedUserData = JSON.parse(userData);
  //     setUserName(parsedUserData.name || ''); // Fallback if name is not available
  //   } catch (error) {
  //     console.error('Error parsing user data:', error);
  //     navigate('/login'); // Redirect if there's an error parsing data
  //   }
  // }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token from localStorage
    localStorage.removeItem('userData'); // Clear the user data from localStorage
    setShowLogoutAlert(true);
    setTimeout(() => {
      setShowLogoutAlert(false);
      navigate('/login'); // Redirect to login page after hiding the alert
    }, 3000); // Hide alert after 3 seconds
    setShowProfileDetails(false);
  };

  return (
    <div className="profile-menu" ref={profileRef}>
      <div className="profile-icon" onClick={toggleProfileDetails}>
        <Avatar
          size={50}
          src="https://marketplace.canva.com/EAFHfL_zPBk/1/0/1600w/canva-yellow-inspiration-modern-instagram-profile-picture-kpZhUIzCx_w.jpg"
        />
      </div>
      {showProfileDetails && (
        <div className="profile-details">
          <p>Welcome, {userName}!</p>
          <Button icon={<UserOutlined />} onClick={() => console.log('View Profile clicked')}>
            Profile
          </Button>
          <Button icon={<SettingOutlined />} onClick={() => console.log('Settings clicked')}>
            Settings
          </Button>
          <Button className="profile_menu_logout" onClick={handleLogout} danger>
            Logout
          </Button>
        </div>
      )}
      {showLogoutAlert && (
        <Alert
          message="Logout successful"
          type="success"
          showIcon
          style={{ position: 'absolute', top: '70px', right: '5px', zIndex: 1000 }}
        />
      )}
    </div>
  );
};

export default ProfileMenu;
