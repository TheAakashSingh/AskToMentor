import React from "react";
import { Link } from "react-router-dom";
import { Switch } from "antd";
import logo from "../../../assets/logo.png";
import "./Header.css";

const Header = ({ role, toggleRole }) => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="ai-tutor">
            <Link to="/blogs">AI Tutor</Link>
          </li>
          <li>
            <Link to="/explore">
              Explore
              <span className="bg-slide"></span>
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              Blogs
              <span className="bg-slide"></span>
            </Link>
          </li>
          <li>
            <Link to="/plans">
              Subscriptions
              <span className="bg-slide"></span>
            </Link>
          </li>
          <li>
            <Link to="/Contactus">
              Contact Us
              <span className="bg-slide"></span>
            </Link>
          </li>
        </ul>
        <div className="sign">
          <Switch
            checkedChildren="Mentee"
            unCheckedChildren="Mentor"
            defaultChecked
            onChange={toggleRole}
          />
          
          <Link to="/login" className="login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
