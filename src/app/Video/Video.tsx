'use client';
import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <section className="video">
      <div className="video__container">
        <img
          className="video__image"
          src="/social.jpg"
          alt="Video Background"
        />
        <div className="video__overlay">
          <div className="video__content">
            <h2 className="video__title">
              <span className="video__moving-word">Craft</span> your{' '}
              <span className="video__moving-word">Future</span> with{' '}
              <span className="video__gradient-text">REVIBILE</span>
            </h2>
            <p className="video__message">
              Elevate your social media presence with innovative strategies.
              <br />
              <a href="/freedemo" className="video__demo-link">
                Request your FREE consultation.
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="video__gradients">
        <div className="video-gradient video__tl-gradient"></div>
        <div className="video-gradient video__br-gradient"></div>
      </div>
    </section>
  );
};

export default Video;
