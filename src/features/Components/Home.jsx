import React, { useEffect, useState } from 'react';
import Header from './Header/Header';
import Body from './Body/Body';
import Footer from './footer/Footer';
import Welcome from './Welcome/Welcome';
import Chatbot from './Chatbot/Chatbot';
import { Button, Modal } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import mentorAds1 from '../../assets/images/4630062.jpg';

function Home() {
  const [role, setRole] = useState("Mentee");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isFirstModalShown, setIsFirstModalShown] = useState(false); 
  const toggleRole = (checked) => {
    setRole(checked ? "Mentee" : "Mentor");
  };

  const navigate = useNavigate();

  const handleOk = () => {
    navigate('/signupmentor');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Show modal after 4 seconds initially
    const initialTimer = setTimeout(() => {
      setIsModalVisible(true);
      setIsFirstModalShown(true); 
    }, 4000);


    const intervalId = setInterval(() => {
      if (isFirstModalShown) {
        setIsModalVisible(true);
      }
    }, 30000); 

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(initialTimer);
      clearInterval(intervalId); // Clear interval timer
    };
  }, [isFirstModalShown]); // Dependency array includes `isFirstModalShown`

  return (
    <div style={{ backgroundColor: '#2e3944' }}>
      <Header role={role} toggleRole={toggleRole} />
      <Welcome role={role} toggleRole={toggleRole} />
      <Body role={role} />
      <Footer />
      <Chatbot />
      <Modal
        title="Unlock Your Mentoring Potential!"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="mentor-modal"
      >
        <div className="modal-content">
          <img src={mentorAds1} alt="Mentor Benefits" className="modal-image" />
          <h2 className="modal-title">Why Become a Mentor? 🌟</h2>
          <p className="modal-description">
            🌟 <strong>Make a Difference</strong>: Share your expertise and guide the next generation of leaders. Help shape their careers and make a lasting impact. ✨
          </p>
          <p className="modal-description">
            💼 <strong>Enhance Your Skills</strong>: Gain new insights, broaden your horizons, and refine your mentoring skills. Connect with like-minded professionals and grow together. 📈
          </p>
          <p className="modal-description">
            💸 <strong>Earn While You Help</strong>: Monetize your knowledge through personalized mentoring sessions. Turn your expertise into income while making a positive difference. 💰
          </p>
          <Button type="primary" onClick={handleOk} className="modal-button">
            Join as Mentor 🚀
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
