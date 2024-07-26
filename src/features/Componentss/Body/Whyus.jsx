import React from 'react';
import { Link } from 'react-router-dom';
import './WhyUs.css'; // Import your custom CSS file for styling
import AboutUsImage from '../../../assets/about.gif'; // Adjust this path as per your project structure

const WhyUs = () => {
  return (
    <>
      <h2>Why Choose Us?</h2>
      <div className="why-choose-us">
        <img src={AboutUsImage} alt="About Us" className="why-us-image" />

        <div className="content">
          <ul className="benefits">
            <li className="expert">
              <span className="step1">Expert Mentors: </span> Our mentors are seasoned professionals in their fields.
            </li>
            <li className="personalized">
              <span className="step1">Personalized Assistance: </span> Tailored guidance to meet your specific learning needs.
            </li>
            <li className="flexible">
              <span className="step1">Flexible Plans: </span> Choose from various subscription plans to suit your schedule and budget.
            </li>
            <li className="community">
              <span className="step1">Community Support: </span> Join a supportive community dedicated to helping you succeed.
            </li>
            <li className="academic">
              <span className="step1">Academic Support: </span> Homework help or topic related Query
            </li>
          </ul>
          <Link to="/about" className="learn-more">
            Learn More About Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
