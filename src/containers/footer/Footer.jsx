import React from 'react';
import fortnightLogo from '../../assets/logo.svg';
import './footer.css';

const Footer = () => {
  return (
    <div className="fortnight__footer section__padding">
    <div className="fortnight__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="fortnight__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="fortnight__footer-links">
      <div className="fortnight__footer-links_logo">
        <img src={fortnightLogo} alt="fortnight_logo" />
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="fortnight__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="fortnight__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="fortnight__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="fortnight__footer-copyright">
      <p>@2022 FortNight. All rights reserved.</p>
    </div>
  </div>
  )
}

export default Footer