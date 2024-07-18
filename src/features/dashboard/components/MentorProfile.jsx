import React from 'react';

const MentorProfile = ({ mentor }) => {
    const { name, profilePicture, location, description, rating, skills } = mentor;

    // Function to generate a random color for the skill button
    const getRandomColor = () => {
        const colors = ['#FF6B6B', '#6BFF6B', '#6B6BFF', '#FFD76B', '#6BD7FF', '#D76BFF', '#FF6BD7', '#6BFFD7', '#D7FF6B', '#A0A0A0'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="mentor-profile">
            <div className="profile-header-main">
                <div className="profile-picture">
                    <img src={profilePicture} alt={name} className="profile-picture-img" />
                </div>
                <div className="profile-details2">
                    <h2>{name}</h2>
                    <p className="profile-location">{location}</p>
                    <p className="profile-description">{description}</p>
                </div>
            </div>

            <div className="profile-details-footer">
                <div className="profile-rating">
                    <p>Rating: <span className="rating-number">{rating}/5</span></p>
                </div>
                <div className="profile-skills">
                    {skills.map((skill, index) => (
                        <button
                            key={index}
                            className="skill-button"
                            style={{ backgroundColor: getRandomColor() }}
                        >
                            {skill}
                        </button>
                    ))}
                </div>
            </div>
            <button className="know-more-button">Know More</button>
        </div>
    );
};

export default MentorProfile;
