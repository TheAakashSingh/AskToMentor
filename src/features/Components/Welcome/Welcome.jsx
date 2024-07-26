import React, { useEffect, useState } from 'react';
import './Welcome.css';
import hello from '../../../assets/learners.jpeg';
import { Link } from 'react-router-dom';

const WelcomeComponent = ({ role }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 500); // Animation duration
    return () => clearTimeout(timeout);
  }, [role]);

  return (
    <div className="welcome-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="typewriter-text">
            Welcome to AskToMentor {""}
          </h1>
          <div className="highlight-text">
            (Where Curiosity Meets Knowledge)
          </div>
          <p className="intro-text">
           <span className="curlyBlink">{'{'}</span> Facing uncertainties in your day-to-day tasks, learning, job, or career? <span className="curlyBlink">{'}'}</span> 
          </p>

          <div className={`role-content ${animate ? 'fade-in' : ''}`}>
            {role === 'Mentor' ? (
              <div className="mentor-section">
                <h2>Are you a guide?</h2>
                <p>
                  Share your knowledge, guide others, and help shape the future of learners.
                  As a mentor on our platform, you can:
                </p>
                <ul>
                  <li>Offer personalized guidance to mentees</li>
                  <li>Share your expertise through blogs and tutorials</li>
                  <li>Earn through mentoring sessions</li>
                  <li>Network with other professionals</li>
                </ul>
                <Link to="/signupmentor" className="join-button">Join as Mentor</Link>
              </div>
            ) : (
              <div className="mentee-section">
                <h2>Are you a learner?</h2>
                <p>
                  Enhance your skills, get personalized guidance, and achieve your career goals.
                  As a mentee on our platform, you can:
                </p>
                <ul>
                  <li>Receive guidance from experienced mentors</li>
                  <li>Access a wide range of learning resources</li>
                  <li>Participate in interactive sessions and webinars</li>
                  <li>Connect with a community of learners</li>
                </ul>
                <Link to="/signup" className="join-button">Join as Mentee</Link>
              </div>
            )}
          </div>
        </div>
        <div className="image-content">
          <img src={hello} alt="Hello Image" className="hello-image" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
