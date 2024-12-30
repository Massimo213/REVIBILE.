'use client'
import React from "react";
import "./CTA.css";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta">
      <div className="cta-content">
        <div className="cta-content__left">
          <h3 className="h3 cta__heading">
            Unlock the Full Potential of{" "}<span className="h3 cta__subheading">REVIBILE.</span>
          </h3>
          <p className="text-reg cta__description">
            Ready to streamline your workflow and boost your productivity? Start REVIBILE. today and SEE RESULTS !
          </p>
          <button className="cta__button">
          <Link href="/freedemo"> 
            <p className="cta__button-text">Book you Call with our Team Today</p>
            </Link>
            <img className="cta__button-icon" src='/arrow.svg' alt="arrow" />
          </button>
          
        </div>
        <div className="cta-content__right">
          <img className="cta__shapes" src="/cta-shapes.png" alt="graphic shapes" />
        </div>
      </div>
      
    </section>
  );
};

export default CTA;