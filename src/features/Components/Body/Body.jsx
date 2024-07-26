import React from 'react';
import './Body.css'; // Import your custom CSS file for App styling
import Steps from './Steps.jsx';
import Whyus from './Whyus.jsx';
import Testimonials from './testimonials.jsx';
import Gears from "../../../assets/explain.gif"; // Import the gears GIF image
import HowGif from "../../../assets/gif.gif"; // Import the How GIF image
import Video from "./Video.jsx";

const App = () => {
  return (
    <div className="App">
      <main className="main-content">
        <section className="container">
          <Video/>
          <Steps />
          
          {/* How It Works Section */}
          <div className="how-it-works">
            <div className="how-it-works-content">
              <h2 className='title5'>How It Works</h2>
              <div className="how-content">
                <div className="how-content-left">
                  <img src={Gears} alt="Gears" className="gears-image" />
                </div>
                <div className="how-content-right">
                  <img src={HowGif} alt="How GIF" className="how-gif" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Gears Image on the left side */}
          
          <Whyus />
          <Testimonials />
          
        </section>
      </main>
    </div>
  );
};

export default App;
