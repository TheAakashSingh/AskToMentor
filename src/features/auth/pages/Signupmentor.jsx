import React, { useState, useEffect } from "react";
import { Button, Input, Typography, Space, Form, Modal } from "antd";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import 'antd/dist/reset.css'; // Import Ant Design CSS
import '../../../styles/signupMentor.css'; // Import your custom CSS
import { Link, useNavigate } from "react-router-dom";

const { Title } = Typography;

const SignupMentor = () => {
  const [method, setMethod] = useState(null);
  const [form] = Form.useForm();
  const handleSubmit = (values) => {
    console.log(values);
    // Implement your submission logic here
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsModalVisible(true);
    }, 4000); // Show modal after 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const navigate = useNavigate()
  const handleOk = () => {
    navigate('/signupmentor')
    // Navigate to the signup page or perform any action
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className='signup-mentor-container'>
      <div className="signup-mentor-box">
        <Title level={2} className="signup-mentor-title">Sign Up as a Mentor</Title>

        {!method ? (
          <Space direction="vertical" size="large" className="signup-mentor-buttons">
            <Button
              type="primary"
              size="large"
              onClick={() => setMethod('google')}
              className="signup-mentor-button-google"
            >
              Sign Up with Google
            </Button>
            <Button
              type="default"
              size="large"
              onClick={() => setMethod('linkedin')}
              className="signup-mentor-button-linkedin"
            >
              Sign Up with LinkedIn
            </Button>
          </Space>
        ) : (
          <Form
            form={form}
            layout="vertical"
            className="signup-mentor-form"
            onFinish={handleSubmit}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input
                placeholder="Enter your name"
                prefix={<BiSolidUser />}
              />
            </Form.Item>

            <Form.Item
              label="Mobile Number"
              name="mobile"
              rules={[{ required: true, message: 'Please input your mobile number!' }]}
            >
              <Input
                placeholder="Enter your mobile number"
                type="number"
                prefix={<MdEmail />}
              />
              <marquee className='marquess1' behavior="smooth" direction="">
                Please note that this number is required for us to verify your account. A representative will call or text you regarding our platform.
              </marquee>
            </Form.Item>

            {method === 'google' ? (
              <>
                <Form.Item
                  label="Gmail Address"
                  name="email"
                  rules={[{ required: true, message: 'Please input your Gmail address!' }]}
                >
                  <Input
                    placeholder="Enter your Gmail address"
                    type="email"
                    prefix={<MdEmail />}
                  />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item
                  label="LinkedIn Profile URL"
                  name="linkedinUrl"
                  rules={[{ required: true, message: 'Please input your LinkedIn profile URL!' }]}
                >
                  <Input
                    placeholder="Enter your LinkedIn profile URL"
                    type="link"
                    prefix={<BiSolidUser />}
                  />
                </Form.Item>
              </>
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit" className="signup-mentor-submit-button">
                Submit
              </Button>
            </Form.Item>
          </Form>
        )}

        <div className="loginForMentor">
          <span>Already have accoun? </span>
          <Link to='/loginMentor' className="loginMentor">Login</Link>

        </div>
      </div>

      <Modal
        title="Benefits of Joining as a Mentor"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Join Now
          </Button>,
        ]}
      >
        <p>Discover the benefits of joining our platform as a mentor. Earn money while helping others grow and succeed.</p>
        <p>Our platform connects you with mentees from various fields, providing opportunities to share your knowledge and experience.</p>
        <p>Join now and start making a difference in someone's life while also advancing your own career.</p>
      </Modal>
    </div>
  );
};

export default SignupMentor;
