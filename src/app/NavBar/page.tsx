'use client'
import React from 'react';
import Link from 'next/link';
import "./Navbar.css";
import FreeDemoForm from '../FreeDemoForm/FreeDemoForm';
const Navigation = () => {
  return (
    <nav className="navigation">
      <Link href="/" className='no-underline'>
      <div className="navigation__logo-section">
        <h3 className="navigation__name">Revibile<span className='navigation__name2'>.</span></h3>
      </div>
      </Link>
      <ul className="navigation__link-section">
        <Link href="#features" className="text-reg navigation__link">
          Services
        </Link>
        <Link href="/about"  className="text-reg navigation__link">
          About Us
        </Link>
        <a href="mailto:contactus@revibile.com" className="text-reg navigation__link">
          Contact Us 
        </a>
      </ul>
      <Link href="/freedemo" className="no-underline">
        <button className="text-reg navigation__cta">
          Free Call
          <img className="navigation__arrow" src="/arrow.svg" alt="arrow" />
        </button>
      </Link>
    </nav>
  );
};

export default Navigation;