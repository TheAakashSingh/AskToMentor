import React, { useState } from "react";
import Image from "../../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "../../../styles/login.css"; // Import your CSS file if needed
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import axios from "axios";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });

  const [emailError, setEmailError] = useState(false); // State to manage email error
  const [passwordError, setPasswordError] = useState(false); // State to manage password error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear email and password errors when user starts typing again
    if (name === 'email' && value.trim() !== '') {
      setEmailError(false);
    }
    if (name === 'password' && value.trim() !== '') {
      setPasswordError(false);
    }
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!userInput.email || !userInput.password) {
      Swal.fire({
        title: "Something is missing",
        text: "Either Password or Email is missing",
        icon: "error",
        customClass: {
          container: "error-container",
          popup: "error-popup",
          title: "error-title",
          content: "error-text",
          confirmButton: "error-button"
        }
      });
  
      // Check if email or password is empty to trigger error styles
      if (!userInput.email) {
        setEmailError(true);
      }
      if (!userInput.password) {
        setPasswordError(true);
      }
    } else if (!emailRegex.test(userInput.email)) {
      Swal.fire({
        title: "Invalid Email Format",
        text: "Please enter a valid email address",
        icon: "error",
        customClass: {
          container: "error-container",
          popup: "error-popup",
          title: "error-title",
          content: "error-text",
          confirmButton: "error-button"
        }
      });
  
      // Highlight email input with red border
      setEmailError(true);
    } else {
      try {
        // Make API call to login
        const response = await axios.post('http://localhost:5000/api/user/login', {
          email: userInput.email,
          password: userInput.password
        });
  
        // Handle successful login
        Swal.fire({
          title: "Login Success",
          icon: "success",
          confirmButton: 'success'
        });
  
        // Store token and user data in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userData', JSON.stringify(response.data.user)); // Store user data
  
        // Redirect to dashboard or any other page
        navigate('/dashboard');
      } catch (error) {
        // Handle login error
        Swal.fire({
          title: "Login Failed",
          text: error.response ? error.response.data.message : "An error occurred",
          icon: "error",
          customClass: {
            container: "error-container",
            popup: "error-popup",
            title: "error-title",
            content: "error-text",
            confirmButton: "error-button"
          }
        });
  
        if (error.response && error.response.data.message.includes('email')) {
          setEmailError(true);
        }
        if (error.response && error.response.data.message.includes('password')) {
          setPasswordError(true);
        }
      }
    }
  };
  

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="Logo" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Please enter your details</p>
            <form>
              <div className={`input-container ${emailError ? 'error-outline' : ''}`}>
                <MdEmail className="icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userInput.email}
                  onChange={handleInputChange}
                  style={{ borderBottom: emailError ? '2px solid red' : '' }}
                />
              </div>
              <div className={`input-container password ${passwordError ? 'error-outline' : ''}`}>
                <RiLockPasswordFill className="icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={userInput.password}
                  onChange={handleInputChange}
                  required
                  style={{ borderBottom: passwordError ? '2px solid red' : '' }}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
  
              <div className="login-center-options">
                <div className="remember-div">
                  <input type="checkbox" id="remember-checkbox" />
                  <label htmlFor="remember-checkbox">
                    Remember me
                  </label>
                </div>
                <Link to="/forgotpassword" className="forgot-pass-link">Forgot Password</Link>
              </div>
              <div className="login-center-buttons">
                <button type="button" onClick={handleLogin}>
                  Log In
                </button>
              </div>
            </form>
          </div>
  
          <p className="login-bottom-p">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
