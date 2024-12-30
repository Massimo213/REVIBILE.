'use client'
import React from "react";
import "./PricingTile.css";
import Link from "next/link";

interface PricingTileProps {
  plan: string;
  planIcon: string; 
  planPrice: number|any;
  planPeriod: string;
  bullets: string[];
  CallToAction: string;
  darkMode: boolean;
}
const PricingTile:React.FC<PricingTileProps> = ({
  plan, 
  planIcon,
  planPrice,
  planPeriod,
  bullets,
  CallToAction,
  darkMode,
}) => {
  const dark = darkMode ? "dark" : "";
  const price =
  planPeriod === "/monthly" ? "$" + planPrice : "$" + planPrice * 12 * 0.75;
  return (
    <div className={`pricing-tile ${dark}`}>
      <div className="plan-section">
        <img className="plan-section__icon" src={planIcon} alt={plan} />
        <p className="text-small plan-section__plan">{plan}</p>
      </div>
      <div className="pricing-section">
        <h2 className={`h2 pricing-section__price ${dark}`}>
          {planPrice ? price : "Custom"}
        </h2>
        <p className={`text-reg pricing-section__period ${dark}`}>
          {planPrice ? planPeriod : ""}
        </p>
      </div>
      <div className="bullets-section">
        {bullets.map((bullet, i) => {
          return (
            <div className="pricing-bullet" key={i}>
              <img className="pricing-bullet__check" src="/check.png" alt="check" />
              <p className={`text-reg pricing-bullet__text ${dark}`}>
                {bullet}
              </p>
            </div>
          );
        })}
      </div>
      
    
      <button className={`pricing-cta ${dark}`}>
      <Link href='/freedemo' className="no-underline">
        <span className="text-med pricing-cta__text">{CallToAction}</span>
        </Link>
        <img
          className={`pricing-cta__icon ${dark}`}
          src={darkMode ? "/arrow.svg" : "/colored-arrow.svg"}
          alt="arrow"
        />
      </button>
      
      
      <p className="text-tiny pricing-tile__no-card">
        {planPrice ? "No credit card required for the trial" : ""}
      </p>
    </div>
  );
};

export default PricingTile;