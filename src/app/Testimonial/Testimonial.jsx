'use client '
import React from "react";
import "./Testimonial.css";

// @ts-ignore
const Testimonial = ({ children }) => {
  return (
    <section className="testimonial">
      <div className="testimonial__container">{children}</div>
    </section>
  );
};
export default Testimonial;