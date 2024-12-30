'use client'
import React from "react";
import "./Hero.css";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
      <h1 className="h1 hero__heading">
  Your <span className="hero__heading-gradient">Marketing Strategy</span>, 
  Reimagined. Where <span className="hero__heading-gradient">Creativity</span> 
  Drives <span className="hero__heading-gradient">Results</span>.
</h1>
<p className="text-reg hero__subheading">
  Got a vision? 
  Let’s bring it to life together.
</p>

        <div className="hero__input-container">
          <Link href='/freedemo'>
          <button className="text-reg hero__submit">
            FREE Call
            <img className="hero__arrow" src="./arrow.svg" alt="arrow" />
          </button>
          </Link>
        </div>
      </div>
      <div className="hero__column">
        <img
          className="hero__graphic"
          src="./abstract-shapes.png"
          alt="abstract shapes"
        />
      </div>
    </section>
  );
};

export default Hero;
