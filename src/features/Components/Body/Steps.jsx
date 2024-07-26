// App.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Steps.css'; // Import your custom CSS file for App styling
import Steps from './Steps.jsx';
import questionImage from '../../../assets/question.png';
import mentorImage from '../../../assets/mentor2.gif';
import learningImage from '../../../assets/Gear.gif';
import personImage from '../../../assets/cha.gif'; // Renamed asset for clarity

const App = () => {
  return (
    <div className="App">
      <h2>Steps Involved</h2>
      <div className="features">
        <div className="feature">
          <div className="feature-icon">
            <img src={mentorImage} alt="Mentor Icon" className="feature-icon-img" />
          </div>
          <h3>Connect with Mentors</h3>
          <p>Choose from a variety of mentors specializing in different fields of expertise.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={questionImage} alt="Question Icon" className="feature-icon-img" />
          </div>
          <h3>Ask Questions From Mentor</h3>
          <p>Ask detailed questions and get personalized answers from our mentors.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={personImage} alt="Personalized Icon" className="feature-icon-img" />
          </div>
          <h3>Personalized Guidance</h3>
          <p>Receive tailored advice and strategies to overcome your learning challenges.</p>
        </div>
        <div className="feature">
          <div className="feature-icon">
            <img src={learningImage} alt="Learning Icon" className="feature-icon-img" />
          </div>
          <h3>Access Learning Resources</h3>
          <p>Explore blogs, articles, and educational content curated by our mentors.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
