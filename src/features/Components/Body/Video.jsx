// App.js

import React from 'react';
import './Video.css'; // Import your CSS file for styling

const App = () => {
  // Example video data
  const videos = [
    { 
      title: 'Hitesh Chaudhary', 
      videoId: 'Hr5iLG7sUa0?si=LGBN7WgM2dwX11m4',
      description: 'My Name is Hitesh Choudhary and I am a teacher by profession. I teach coding to various level of students, right from beginners to folks who are already writing great softwares'
    },
    { 
      title: 'Hitesh Chaudhary', 
      videoId: 'Ca5DLSDfPec',
      description: 'My Name is Hitesh Choudhary and I am a teacher by profession. I teach coding to various level of students, right from beginners to folks who are already writing great softwares'
    },  // Replace VIDEO_ID_2 with actual YouTube video ID
    { 
      title: 'Haris Ali Khan', 
      videoId: 'bT70Qqgn-qY?si=sGmsfPCl4mnzRcHd',
      description: 'Description for Video 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
    },  // Replace VIDEO_ID_3 with actual YouTube video ID
    { 
      title: 'Bro Code', 
      videoId: 'NBIUbTddde4?si=sEdC9r0lFax2fQkr',
      description: 'Description for Video 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.'
    },  // Replace VIDEO_ID_4 with actual YouTube video ID
    // Add more videos as needed
  ];

  const VideoCard = ({ title, videoId, description }) => {
    return (
      <div className="video-card">
        <div className="video-responsive">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            muted
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
        <div className="video-info">
          <h2 className="video-title">{title}</h2>
          <p className="video-description">{description}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="App1">
      <h1 className="header-left">Meet Our Mentors</h1>
      <div className="video-container">
        {videos.map((video, index) => (
          <VideoCard key={index} title={video.title} videoId={video.videoId} description={video.description} />
        ))}
      </div>
    </div>
  );
};

export default App;
