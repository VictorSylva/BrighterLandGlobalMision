import React from 'react';
import { useHistory } from 'react-router-dom';
import './Donate.css';

const Donate = () => {
  const history = useHistory();

  const donationOptions = [
    {
      title: "Sponsor a Child",
      amount: "$50",
      description: "Monthly support for one child's education",
      features: [
        "School fees and supplies",
        "Regular progress updates",
        "Direct communication with the child"
      ]
    },
    {
      title: "Train a Lawyer",
      amount: "$100",
      description: "Monthly support for lawyer training",
      features: [
        "Legal education materials",
        "Practical training opportunities",
        "Mentorship program"
      ]
    },
    {
      title: "Train a Doctor",
      amount: "$150",
      description: "Monthly support for medical training",
      features: [
        "Medical education resources",
        "Clinical training support",
        "Specialized equipment"
      ]
    }
  ];

  const handleDonate = (option) => {
    // In a real implementation, this would open a payment modal/form
    // For now, we'll just navigate to a donation form page
    history.push(`/donate/${option.title.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className="donate-container">
      <div className="donate-header">
        <h1>Support Our Mission</h1>
        <p>Your donation can transform lives and create lasting impact</p>
      </div>

      <div className="donation-options">
        {donationOptions.map((option, index) => (
          <div className="donation-card" key={index}>
            <h2>{option.title}</h2>
            <div className="donation-amount">{option.amount}</div>
            <p className="donation-description">{option.description}</p>
            <ul className="donation-features">
              {option.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button 
              className="donate-btn"
              onClick={() => handleDonate(option)}
            >
              Donate Now
            </button>
          </div>
        ))}
      </div>

      <div className="other-ways">
        <h2>Other Ways to Support</h2>
        <div className="support-options">
          <div className="support-card">
            <h3>Volunteer</h3>
            <p>Share your skills and time with our programs</p>
            <button 
              className="support-btn"
              onClick={() => history.push('/programs')}
            >
              Learn More
            </button>
          </div>
          <div className="support-card">
            <h3>Corporate Partnership</h3>
            <p>Partner with us to create larger impact</p>
            <button 
              className="support-btn"
              onClick={() => history.push('/contact')}
            >
              Contact Us
            </button>
          </div>
          <div className="support-card">
            <h3>Fundraise</h3>
            <p>Start your own fundraising campaign</p>
            <button 
              className="support-btn"
              onClick={() => history.push('/contact')}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate; 