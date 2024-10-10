import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="address-container">
          <h1>Address</h1>
          <div className="address">
            <p>Dr MGR Boys Hostel</p>
            <p>Maduravoyal Chennai, Tamilnadu 600095</p>
            <p>Phone: +91- 9798894221</p>
            <p>Email: <a href="mailto:rakeshranjan804432@gmail.com">rakeshranjan804432@gmail.com</a></p>
          </div>
        </div>
        <div className="social-media">
          <h1>Do you want to connect with me?</h1>
          <div className="list">
            <li className="item"><a href="https://github.com/rakesh9798" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-github" /> GitHub</a></li>
            <li className="item"><a href="https://linkedin.com/in/rakesh9798" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in" /> LinkedIn</a></li>
            <li className="item"><a href="https://leetcode.com/rakesh9798" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-code" /> Leetcode</a></li>
            <li className="item"><a href="https://wa.me/919798894221" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-square-whatsapp" /> WhatsApp</a></li>
          </div>
        </div>
      </div>
      <h2 className='copyright'>&copy; DevByMe 2024</h2>
    </div>
  );
};

export default Footer;
