import React from 'react';
import { useHistory } from 'react-router-dom';
import './ImpactReport.css';

const ImpactReport = () => {
  const history = useHistory();

  // This would typically come from an API or database
  const reportData = {
    year: '2023',
    highlights: [
      'Sponsored 1,000+ children through education programs',
      'Trained 500 lawyers in children\'s rights advocacy',
      'Graduated 500 doctors from medical training program',
      'Reached 50+ communities with healthcare services',
      'Provided mentorship to 2,000+ students'
    ],
    financials: {
      totalRevenue: '$5,000,000',
      programExpenses: '$4,000,000',
      administrativeExpenses: '$500,000',
      fundraisingExpenses: '$300,000'
    },
    futureGoals: [
      'Expand education sponsorship to 2,000 children',
      'Train additional 500 healthcare professionals',
      'Establish 10 new community healthcare centers',
      'Launch digital education platform'
    ]
  };

  return (
    <div className="impact-report-container">
      <button 
        className="back-button"
        onClick={() => history.push('/impact')}
      >
        ← Back to Impact
      </button>

      <h1>Annual Impact Report {reportData.year}</h1>
      
      <div className="report-section">
        <h2>Key Highlights</h2>
        <ul>
          {reportData.highlights.map((highlight, index) => (
            <li key={index}>{highlight}</li>
          ))}
        </ul>
      </div>

      <div className="report-section">
        <h2>Financial Overview</h2>
        <div className="financials-grid">
          <div className="financial-item">
            <h3>Total Revenue</h3>
            <p>{reportData.financials.totalRevenue}</p>
          </div>
          <div className="financial-item">
            <h3>Program Expenses</h3>
            <p>{reportData.financials.programExpenses}</p>
          </div>
          <div className="financial-item">
            <h3>Administrative Expenses</h3>
            <p>{reportData.financials.administrativeExpenses}</p>
          </div>
          <div className="financial-item">
            <h3>Fundraising Expenses</h3>
            <p>{reportData.financials.fundraisingExpenses}</p>
          </div>
        </div>
      </div>

      <div className="report-section">
        <h2>Future Goals</h2>
        <ul>
          {reportData.futureGoals.map((goal, index) => (
            <li key={index}>{goal}</li>
          ))}
        </ul>
      </div>

      <div className="report-actions">
        <button 
          className="download-pdf-btn"
          onClick={() => {
            // In a real implementation, this would trigger a PDF download
            alert('PDF download would start here');
          }}
        >
          Download Full Report (PDF)
        </button>
        <button 
          className="contact-btn"
          onClick={() => history.push('/contact')}
        >
          Contact for More Information
        </button>
      </div>
    </div>
  );
};

export default ImpactReport; 