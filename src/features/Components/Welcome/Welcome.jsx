import React, { useRef, useEffect } from 'react';
import './Welcome.css';
import hello from '../../../assets/hello.png';

const WelcomeComponent = () => {
  const welcomeRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (welcomeRef.current) {
        const rect = welcomeRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        welcomeRef.current.style.setProperty('--x', `${x}px`);
        welcomeRef.current.style.setProperty('--y', `${y}px`);
      }
    };

    const currentRef = welcomeRef.current;
    if (currentRef) {
      currentRef.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={welcomeRef} className="welcome-section">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="typewriter-text">
            Welcome to AskToMentor
          </h1>
          <p>
          Have any doubts Academic/Career related?<br/>
          Get instant solution/resolution here.
          Connect with our versatile experts to overcome your doubts.
          </p>
        </div>
        <div className="image-content">
          <img src={hello} alt="Hello Image" className="hello-image" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeComponent;
