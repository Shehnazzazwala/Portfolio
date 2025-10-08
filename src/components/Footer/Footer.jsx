import React from 'react';
import './Footer.css';

// Your social media links
const socialLinks = {
  github: "https://github.com/Shehnazzazwala",
  linkedin: "https://www.linkedin.com/in/shehnaz-zazwala-826909227/",
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p>© 2025 Zazwala Shehnazbegum.</p>
      </div>
    </footer>
  );
};

// THIS IS THE LINE THAT WAS MISSING
export default Footer;