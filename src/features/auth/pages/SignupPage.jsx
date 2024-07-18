import React, { useState } from "react";
import Image from "../../../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { BiSolidUser } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import "../../../styles/signup.css"; // Import your CSS file if needed

const SignupPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State variables for input errors
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error state when user starts typing
    switch (name) {
      case "name":
        setNameError(false);
        break;
      case "email":
        setEmailError(false);
        break;
      case "password":
        setPasswordError(false);
        break;
      case "confirmPassword":
        setConfirmPasswordError(false);
        break;
      default:
        break;
    }
  };

  const handlePasswordVisibility = (type) => {
    if (type === "password") {
      setShowPassword(!showPassword);
    } else if (type === "confirmPassword") {
      setShowPassword2(!showPassword2);
    }
  };

  const validateEmail = (email) => {
    // Basic email format validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const signup = () => {
    const { name, email, password, confirmPassword } = userInput;

    // Validate inputs and show error messages
    if (!name || !email || !password || !confirmPassword) {
      Swal.fire({
        title: "Missing Information",
        text: "Please fill in all fields.",
        icon: "warning",
        customClass: {
          container: "error-container",
          popup: "error-popup",
          title: "error-title",
          content: "error-text",
          confirmButton: "error-button",
        },
      });
      // Set error state for each empty field
      if (!name) setNameError(true);
      if (!email) setEmailError(true);
      if (!password) setPasswordError(true);
      if (!confirmPassword) setConfirmPasswordError(true);
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords not matched",
        text: "Please make sure your passwords match.",
        icon: "warning",
        customClass: {
          container: "error-container",
          popup: "error-popup",
          title: "error-title",
          content: "error-text",
          confirmButton: "error-button",
        },
      });
      return;
    }

    if (!validateEmail(email)) {
      Swal.fire({
        title: "Invalid Email Format",
        text: "Please enter a valid email address.",
        icon: "error",
        customClass: {
          container: "error-container",
          popup: "error-popup",
          title: "error-title",
          content: "error-text",
          confirmButton: "error-button",
        },
      });
      setEmailError(true);
      return;
    }

    // Proceed with signup logic
    console.log("Signing up...");
    // Example: Call API or perform signup action
  };

  return (
    <>
      <div className="login-main">
        <div className="login-left">
          <img src={Image} alt="Logo" />
        </div>
        <div className="login-right">
          <div className="login-right-container">
            <div className="login-center">
              <h2>Create Account</h2>
              <p>Please enter your details</p>
              <form>
                <div className={`Usericon ${nameError ? 'error' : ''}`}>
                  <BiSolidUser />
                </div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  value={userInput.name}
                  onChange={handleInputChange}
                  style={{ borderBottom: nameError ? '2px solid red' : '' }}
                />
                <div className={`email-icon ${emailError ? 'error' : ''}`}>
                  <MdEmail />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={userInput.email}
                  onChange={handleInputChange}
                  style={{ borderBottom: emailError ? '2px solid red' : '' }}
                />
                <div className={`passwordicon ${passwordError ? 'error' : ''}`}>
                  <RiLockPasswordFill />
                </div>
                <div className="pass-input-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    value={userInput.password}
                    onChange={handleInputChange}
                    style={{ borderBottom: passwordError ? '2px solid red' : '' }}
                  />
                  {showPassword ? (
                    <FaEyeSlash onClick={() => handlePasswordVisibility("password")} />
                  ) : (
                    <FaEye onClick={() => handlePasswordVisibility("password")} />
                  )}
                </div>
                <div className={`passwordicon2 ${confirmPasswordError ? 'error' : ''}`}>
                  <RiLockPasswordFill />
                </div>
                <div className="pass-input-div">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    value={userInput.confirmPassword}
                    onChange={handleInputChange}
                    style={{ borderBottom: confirmPasswordError ? '2px solid red' : '' }}
                  />
                  {showPassword2 ? (
                    <FaEyeSlash onClick={() => handlePasswordVisibility("confirmPassword")} />
                  ) : (
                    <FaEye onClick={() => handlePasswordVisibility("confirmPassword")} />
                  )}
                </div>
                <div className="login-center-buttons">
                  <button type="button" onClick={signup}>
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
            <p className="login-bottom-p">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
