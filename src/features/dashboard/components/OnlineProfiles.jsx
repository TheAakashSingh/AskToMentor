// OnlineProfiles.js
import React from 'react';
import '../../../styles/OnlineProfiles.css';

const OnlineProfiles = ({ profiles }) => {
  return (
    <div className="online-profiles-container">
      <h3>Online Profiles</h3>
      <ul className="online-profiles-list">
        {profiles.map(profile => (
          <li key={profile.id} className="profile-item">
            <img src={profile.profilePicture} alt={profile.name} className="profile-picture-online" />
            <div className="profile-info">
              <span className="profile-name">{profile.name}</span>
              <span className="profile-location">{profile.location}</span>
              <span className="profile-status">Online</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnlineProfiles;
