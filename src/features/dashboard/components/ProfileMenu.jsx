import React, { useState, useEffect, useRef } from 'react';
import { Avatar, Alert, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { SettingOutlined, UserOutlined } from '@ant-design/icons';

const ProfileMenu = () => {
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const toggleProfileDetails = () => {
    setShowProfileDetails(!showProfileDetails);
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

  const handleLogout = () => {
    setShowLogoutAlert(true);
    setTimeout(() => {
      setShowLogoutAlert(false);
      navigate('/Login'); // Redirect to login page after hiding the alert
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
          <p>Welcome, User!</p>
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
