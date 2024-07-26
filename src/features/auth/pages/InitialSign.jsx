// InitialSign.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Space } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design CSS
import '../../../styles/initialSignin.css'; // Import your custom CSS

const { Title } = Typography;

const InitialSign = () => {
  return (
    <div className='initial-sign-container'>
      <div className="initial-sign-box">
        <Title level={2} className="initial-sign-title" style={{color:'#fff'}}>Join Us</Title>
        <hr className="separator"/>
        <Space direction="horizontal" size="large" className="initial-sign-buttons">
          <Button type="primary" disabled={true} size="large" className="initial-sign-button" style={{background:'#125e66'}}>
            <Link to='/signup'>Join as Mentee</Link>
          </Button>
          <Button type="default" size="large" className="initial-sign-button">
            <Link to='/signupmentor'>Join as Mentor</Link>
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default InitialSign;
