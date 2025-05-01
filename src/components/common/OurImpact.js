import React from "react";
import "./OurImpact.css";

const impactStats = [
  {
    icon: "fas fa-graduation-cap",
    value: "67+",
    label: "Educational Sponsorship Program"
  },
  {
    icon: "fas fa-water",
    value: "6+",
    label: "Boreholes Drilled"
  },
  {
    icon: "fas fa-school",
    value: "9+",
    label: "Mobile Schools Established"
  },
  {
    icon: "fas fa-hands-helping",
    value: "20+",
    label: "Communities Reached"
  },
  {
    icon: "fas fa-church",
    value: "100+",
    label: "Leaders Trained in Mission"
  }
];

const OurImpact = () => (
  <section 
    className="our-impact-section"
    style={{
      background: "linear-gradient(rgba(30,30,30,0.55), rgba(30,30,30,0.55)), url('/images/impact-hero.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat"
    }}
  >
    <h2 className="our-impact-title">Our Impact</h2>
    <p className="our-impact-subtitle">Transforming Lives, One Story at a Time</p>
    <div className="our-impact-cards">
      {impactStats.map((stat, idx) => (
        <div className="our-impact-card" key={idx}>
          <div className="our-impact-icon">
            <i className={stat.icon}></i>
          </div>
          <div className="our-impact-value">{stat.value}</div>
          <div className="our-impact-label">{stat.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default OurImpact; 