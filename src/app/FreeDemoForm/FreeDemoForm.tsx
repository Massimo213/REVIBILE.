'use client'
import React from "react";
import "./FreeDemoForm.css"

export const FreeDemoForm = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    // Send data to email endpoint (example placeholder logic)
    window.location.href = `mailto:contactus@revibile.com?subject=Free Demo Request from ${name}&body=${message}%0A%0AContact Email: ${email}`;
  };

  return (
    <div id='free-form' className="free-demo-form-container">
      <form onSubmit={handleSubmit} className="free-demo-form">
        <h1 className="form-title">Request a <span>FREE {" "}</span>Call Today</h1>
        <p className="form-subtitle">
          Fill out the form below, and we’ll get back to you within A DAY.
        </p>

        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your Name"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Your Email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="If you are booking a call, kindly include your availability details, please mention that explicitly so we can assist you better."
            className="form-textarea"
          ></textarea>
        </div>

        <button type="submit" className="submit-button">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FreeDemoForm;
