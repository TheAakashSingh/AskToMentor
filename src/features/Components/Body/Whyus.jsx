import React from 'react';
import './WhyUs.css'; // Import your custom CSS file for App styling
import mentorImage from '../../../assets/men.gif';
import questionImage from '../../../assets/m.png';
import personImage from '../../../assets/g.gif'; // Renamed asset for clarity


const App = () => {
  return (
    <div className="whyus-App">
      <h2 className="whyus-h2">Why To Choose Us</h2>
      <div className="whyus-features">
        <div className="whyus-feature expert-mentors"> {/* Use unique class names for each feature */}
          <div className="whyus-feature-icon">
            <img src={mentorImage} alt="Mentor Icon" className="whyus-feature-icon-img1" />
          </div>
          <h3>Expert Mentors</h3>
          <p>We hire experienced professionals. Hence, no need to worry</p>
        </div>
        <div className="whyus-feature one-on-one-mentoring"> {/* Use unique class names for each feature */}
          <div className="whyus-feature-icon">
            <img src={questionImage} alt="Question Icon" className="whyus-feature-icon-img" />
          </div>
          <h3>1 : 1 Mentoring</h3>
          <p>You can ask questions and get personalized answers from our mentors one on one.</p>
        </div>
        <div className="whyus-feature flexible-plans"> {/* Use unique class names for each feature */}
          <div className="whyus-feature-icon">
            <img src={personImage} alt="Personalized Icon" className="whyus-feature-icon-img" />
          </div>
          <h3>Career Advice / Guidance</h3>
          <p>Choose from various subscription plans to suit your schedule and budget</p>
        </div>
      </div>
    </div>
  );
};

export default App;
