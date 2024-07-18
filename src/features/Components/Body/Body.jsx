import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'; // Import your custom CSS file for App styling
import Steps from './Steps.jsx';
import mentorImage from '../../../assets/engagement-mentoring-header-image.jpg'; // Path to your mentor image
import GearVideo from '../../../assets/Gear.mp4'; // Path to your video file
import Whyus from './Whyus.jsx';
import Testimonials from './testimonials.jsx';

const App = () => {
  return (
    <div className="App">
      <main className="main-content">
        <section className="container">
          

          {/* How It Works Section */}
          <div className="how-it-works">
            <div className="how-it-works-content">
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <h3>1. Explore and select mentor</h3>
                  <p>Explore from a variety of mentors specializing in various fields will provide personalized assistance.</p>
                </div>
                <div className="step">
                  <h3>2. Choose your subscription plan</h3>
                  <p>Explore and opt for various subscription plans customized to suit your requirements.</p>
                </div>
                <div className="step">
                  <h3>3. Ask Your Question</h3>
                  <p>Post your question or problem, providing as much detail as possible.</p>
                </div>
                <div className="step">
                  <h3>4. Payment Based on Solution Achievement</h3>
                  <p>The payment to the mentor/tutor will not be processed until you obtain the desired solution on my platform.</p>
                </div>
              </div>
            </div>
            <div className="how-it-works-image">
              <video autoPlay muted loop className="video">
                <source src={GearVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <Steps />
          <Whyus/>
          {/* Why Choose Us Section */}
          

          {/* Testimonials Section */}
          <Testimonials />

        </section>
      </main>
    </div>
  );
};

export default App;
