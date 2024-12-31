'use client';
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"; // Import icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content-left">
          <div className="footer__company-container">
            <img className="footer__logo" src="logo.svg" alt="icon" />
            <h2 className="footer__company">REVIBILE.</h2>
          </div>
          <div className="footer__input-container">
            <input
              className="footer__input"
              type="email"
              placeholder="Enter email"
            />
            <img
              className="footer__input-icon"
              src="/colored-arrow.svg"
              alt="arrow"
            />
          </div>
        </div>
        <div className="footer__content-right">
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Product</p>
            <a href="/about" className="text-small footer__link">
              About Us
            </a>
            <a href="/freedemo" className="text-small footer__link">
              Book a Call
            </a>
            <a href="#features" className="text-small footer__link">
              Services
            </a>
          </div>
          <div className="footer__link-col">
            <p className="text-reg footer__col-heading">Company</p>
            <a href="/about" className="text-small footer__link">
              Our Story
            </a>
            <a href="#" className="text-small footer__link">
              Team
            </a>
            <a href="#" className="text-small footer__link">
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="footer__banner">
        <p className="text-small footer__copywright">
          @2024 REVIBILE. All Rights Reserved.
        </p>
        <div className="footer__external-links">
          <a href="https://www.instagram.com/revibile/?hl=fr" target="_blank" rel="noreferrer">
            <FaInstagram className="footer__icon" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF className="footer__icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
