'use client';
import React, { useState } from "react";
import "./Pricing.css";
import PricingTile from "../PricingTile/PricingTile";
import { pricingData } from "~/utils/constants";
// pricing data
const Pricing = () => {
  const [planPeriod, setPlanPeriod] = useState("/monthly");
  const planPeriodToggle = () => {
    planPeriod === "/monthly"
      ? setPlanPeriod("/yearly")
      : setPlanPeriod("/monthly");
  };
  return (
    <section  id ="pricing" className="pricing">
      <div className="pricing__heading-section">
        <h3 className="h3 pricing__heading">
          Pricing <span className="pricing__subheading">& Plans</span>
        </h3>
        <p className="text-reg pricing__subheading">
          Elystra is initially FREE to use but you can upgrade anytime to unlock
          advanced features tailored to your needs and goals.
        </p>
      </div>
      <div className="pricing__billing-section">
        <span className="text-small pricing__savings">Save up to 25%</span>
      </div>
      <div className="pricing__tile-section">
        {pricingData.map((tile, i) => {
          return <PricingTile key={i} {...tile} planPeriod={planPeriod} />;
        })}
      </div>
    </section>
  );
};
export default Pricing;
