import React from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../../../styles/LoginMentor.css'; // Import your custom CSS
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;

const LoginMentor = () => {
  const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Received values:', values);
    if(values){
      navigate('/mentorDashboard')
    }
  };

  return (
    <div className="login-mentor-container">
      <div className="login-mentor-box">
        <Title level={2} className="login-mentor-title">
          Mentor Login
        </Title>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
          className="login-mentor-form"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-mentor-submit-button">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default LoginMentor;
