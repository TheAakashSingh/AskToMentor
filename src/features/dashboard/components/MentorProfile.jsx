import React from 'react';

const MentorProfile = ({ mentor }) => {
    const { name, profilePicture, location, headline, online, rating, skills } = mentor;

    // Function to generate a random color combination for the skill button
    const getRandomColorCombination = () => {
        const colorCombinations = [
            { background: '#FF6347', font: '#FFFFFF' }, // Tomato red with white text
            { background: '#FFD700', font: '#000000' }, // Gold with black text
            { background: '#40E0D0', font: '#000000' }, // Turquoise with black text
            { background: '#DA70D6', font: '#FFFFFF' }, // Orchid with white text
            { background: '#7FFF00', font: '#000000' }, // Chartreuse with black text
            { background: '#1E90FF', font: '#FFFFFF' }, // Dodger blue with white text
            { background: '#FF1493', font: '#FFFFFF' }, // Deep pink with white text
            { background: '#32CD32', font: '#FFFFFF' }, // Lime green with white text
            { background: '#FFA500', font: '#000000' }, // Orange with black text
            { background: '#BA55D3', font: '#FFFFFF' }, // Medium orchid with white text
            { background: '#FF4500', font: '#FFFFFF' }, // Orange red with white text
            { background: '#00FA9A', font: '#000000' }, // Medium spring green with black text
            { background: '#00CED1', font: '#FFFFFF' }, // Dark turquoise with white text
            { background: '#9400D3', font: '#FFFFFF' }, // Dark violet with white text
            { background: '#FF69B4', font: '#000000' }  // Hot pink with black text
        ];
        

        return colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
    };

    return (
        <div className="mentor-profile">
            <div className="profile-header-main">
                <div className="profile-picture">
                    <img src={profilePicture} alt={name} className={online ? "profile-online profile-picture-img" : "profile-picture-img"} />
                    {online ? <div className="onlineArc"></div> : ''}
                </div>
                <div className="profile-details2">
                    <h2>{name}</h2>
                    <p className="profile-location">{location}</p>
                    <p className="profile-description">{headline}</p>
                </div>
            </div>

            <div className="profile-details-footer">
                <div className="profile-rating">
                    <p>Rating: <span className="rating-number">{rating ? rating : 'NaN'}/5</span></p>
                </div>
                <div className="profile-skills">
                    {skills.map((skill, index) => {
                        const colorCombination = getRandomColorCombination();
                        return (
                            <button
                                key={index}
                                className="skill-button"
                                style={{ backgroundColor: colorCombination.background, color: colorCombination.font }}
                            >
                                {skill}
                            </button>
                        );
                    })}
                </div>
            </div>
            <button className="know-more-button">Know More</button>
        </div>
    );
};

export default MentorProfile;
