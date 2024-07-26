import React from 'react';
import './contactus.css'; // Import CSS file for styling
import Header from './Header/Header'; // Assuming this is the correct path to your Header component
// Import logo images (replace with your actual logo file paths)
import linkedinLogo from '../../assets/linked.png';
import instagramLogo from '../../assets/ig.jpg';
import phoneLogo from '../../assets/call.png';
import whatsappLogo from '../../assets/whatsapp.png'; // Import WhatsApp icon

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Harsh',
      email: '',
      message: '',
      linkedin: 'https://www.linkedin.com/company/example', // Replace with actual LinkedIn URL
      instagram: 'https://www.instagram.com/justtt.harsh_/', // Replace with actual Instagram handle
      phone: '+91 9098835618', // Replace with actual phone number
      whatsapp: 'https://api.whatsapp.com/send?phone=919098835618', // Replace with actual WhatsApp URL
      companyInfo: 'Any Suggestions/Complaint ? No Need To Worry We Are Here' // Add your company information
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., sending data to server)
    console.log('Form submitted with state:', this.state);
    // You can add your API call or backend integration logic here
    // Example: axios.post('/api/contact', this.state)
    //      .then(response => console.log('Success:', response))
    //      .catch(error => console.error('Error:', error));
    // Reset form fields if needed
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  render() {
    const { linkedin, instagram, phone, whatsapp, companyInfo } = this.state;

    return (
      <>
        <Header /> {/* Ensure Header component is correctly imported and rendered */}
        <div className="contact-us1">
          <h2>Contact</h2>
          <div className="company-info1">
            <p>{companyInfo}</p>
          </div>
          <div className="contact-info1">
            <div className="contact-item1">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
              <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="contact-item1">
              <img src={instagramLogo} alt="Instagram Logo" />
              <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className="contact-item1">
              <img src={phoneLogo} alt="Phone Logo" />
              <span>{phone}</span>
            </div>
            <div className="contact-item1">
              <img src={whatsappLogo} alt="WhatsApp Logo" />
              <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group1">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group1">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                required
              />
            </div>
            <div className="form-group1">
              <label>Message:</label>
              <textarea
                name="message"
                value={this.state.message}
                onChange={this.handleInputChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }
}

export default ContactUs;
