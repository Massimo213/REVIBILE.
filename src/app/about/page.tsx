'use client';
import React from "react";
import "./about.css";
import CTA from "../CTA/CTA";
import Header from "../Header/Header";
import Navigation from "../NavBar/page";
import Page from "../Page/Page";
const About = () => {
  return (
    
    <>
    <Header>
      <Navigation/>
    </Header>
    <section className="about">
      <div className="about__content">
        <h1 className="about__heading">
          <span className="about__gradient">About</span> Us
          <br />
          <span className="about__gradient">Empowering</span> Engagement.
        </h1>
        <p className="about__description">
          At <strong>Revibile</strong>, we craft solutions that go beyond managing social platforms. 
          We believe in creating stories, fostering genuine connections, and delivering results that resonate.
        </p>
        <p className="about__description">
          Our expertise lies in blending **data-driven strategies** with **creative ingenuity**, ensuring
          that your brand not only stands out but also connects with your audience on a deeper level.
        </p>
        <div className="about__features">
          <div className="feature">
            <h2 className="feature__title">Tailored Strategies</h2>
            <p className="feature__text">
              Custom plans that align with your business goals, ensuring every post and interaction is impactful.
            </p>
          </div>
          <div className="feature">
            <h2 className="feature__title">Creative Content</h2>
            <p className="feature__text">
              Unique and engaging content designed to reflect your brand's voice and captivate your audience.
            </p>
          </div>
          <div className="feature">
            <h2 className="feature__title">Results-Driven Insights</h2>
            <p className="feature__text">
              Comprehensive analytics to measure success and refine your campaigns for maximum impact.
            </p>
          </div>
        </div>
      </div>
    </section>
    <CTA/>
    </>
   
)
}

export default About;
