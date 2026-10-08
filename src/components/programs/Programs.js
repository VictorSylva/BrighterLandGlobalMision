import React from 'react';
import { useHistory } from 'react-router-dom';
import { PROGRAMS_DATA } from '../../data/blgmData';
import './Programs.css';

const Programs = () => {
  const history = useHistory();

  return (
    <div className="blgm-programs-page">
      {/* Page Hero */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img 
            src="/images/gallery/school01.jpg" 
            alt="BLGM Education and community initiatives" 
            className="blgm-page-hero-img" 
          />
          <div className="blgm-page-hero-overlay"></div>
        </div>
        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-eyebrow blgm-eyebrow-dark">
            <i className="fa-solid fa-hand-holding-hand"></i>
            <span>Our Core Programmes</span>
          </div>
          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF' }}>
            Transforming Vulnerable Communities From the Roots Up.
          </h1>
          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 740 }}>
            Every programme operates on a strict model of community partnership, measurable field outcomes, and enduring self-reliance across Nigeria.
          </p>
        </div>
      </section>

      {/* Programme Architecture Overview */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-diagram-project"></i>
              <span>Our Framework</span>
            </div>
            <h2 className="blgm-heading-xl">The Pathway to Sustainable Recovery</h2>
            <p className="blgm-lead">
              We focus our resources where crisis displacement and lack of basic services are most acute, deploying practical solutions that empower people to rebuild their lives.
            </p>
          </div>

          <div className="blgm-prog-framework-strip">
            <div className="blgm-framework-step">
              <span className="blgm-step-num">01</span>
              <h4>Identify Critical Need</h4>
              <p>Direct field assessment with village leadership to identify unreached settlements.</p>
            </div>
            <div className="blgm-framework-step">
              <span className="blgm-step-num">02</span>
              <h4>Deploy Mobile Solutions</h4>
              <p>Immediate mobile classrooms and clean water boreholes with manual hand pumps.</p>
            </div>
            <div className="blgm-framework-step">
              <span className="blgm-step-num">03</span>
              <h4>Train Community Caretakers</h4>
              <p>Equipping local committees and mentors to manage all installed assets.</p>
            </div>
            <div className="blgm-framework-step">
              <span className="blgm-step-num">04</span>
              <h4>Long-Term Flourishing</h4>
              <p>Ongoing educational scholarships and servant leadership development.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Programmes List */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-detailed-programs-list">
            {PROGRAMS_DATA.map((prog, index) => {
              const isEven = index % 2 === 1;
              return (
                <div 
                  className={`blgm-deep-prog-card ${isEven ? 'blgm-deep-prog-reverse' : ''}`}
                  key={prog.id}
                  id={prog.slug}
                >
                  <div className="blgm-deep-prog-visual">
                    <img src={prog.image} alt={prog.title} />
                  </div>

                  <div className="blgm-deep-prog-content">
                    <div className="blgm-eyebrow">
                      <span>Programme #{index + 1}</span>
                    </div>
                    <h3 className="blgm-heading-lg">{prog.title}</h3>
                    <p className="blgm-deep-prog-sub">{prog.subtitle}</p>

                    <div className="blgm-deep-prog-details">
                      <div className="blgm-detail-block">
                        <span className="blgm-block-label">
                          <i className="fa-solid fa-triangle-exclamation"></i> The Problem:
                        </span>
                        <p>{prog.problem}</p>
                      </div>

                      <div className="blgm-detail-block">
                        <span className="blgm-block-label">
                          <i className="fa-solid fa-lightbulb"></i> Our Strategic Approach:
                        </span>
                        <p>{prog.approach}</p>
                      </div>

                      <div className="blgm-detail-block">
                        <span className="blgm-block-label">
                          <i className="fa-solid fa-list-check"></i> Direct Actions on Ground:
                        </span>
                        <ul className="blgm-actions-checklist">
                          {prog.actions.map((act, i) => (
                            <li key={i}>
                              <i className="fa-solid fa-circle-check"></i>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="blgm-verified-impact-pill">
                        <i className="fa-solid fa-award"></i>
                        <span><strong>Verified Field Outcome:</strong> {prog.impactSummary}</span>
                      </div>
                    </div>

                    <div className="blgm-deep-prog-actions">
                      <button 
                        onClick={() => history.push(`/programs/${prog.slug}`)}
                        className="blgm-btn blgm-btn-outline blgm-btn-sm"
                      >
                        <span>Full Case & Process</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                      <button 
                        onClick={() => history.push('/donate')}
                        className="blgm-btn blgm-btn-accent blgm-btn-sm"
                      >
                        <i className="fa-solid fa-hand-holding-dollar"></i>
                        <span>Support This Initiative</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-Programme CTA */}
      <section className="blgm-section blgm-section-cta">
        <div className="blgm-container" style={{ textAlign: 'center' }}>
          <h2 className="blgm-heading-xl" style={{ marginBottom: '1.25rem' }}>
            Want to Sponsor a Specific Programme or Village?
          </h2>
          <p className="blgm-lead" style={{ maxWidth: 680, margin: '0 auto 2.5rem auto' }}>
            We provide verified project reporting and direct accountability for corporate sponsors, churches, and international philanthropic foundations.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => history.push('/donate')}
              className="blgm-btn blgm-btn-accent blgm-btn-lg"
            >
              <span>Make a Programme Donation</span>
              <i className="fa-solid fa-heart"></i>
            </button>
            <button 
              onClick={() => history.push('/contact')}
              className="blgm-btn blgm-btn-outline blgm-btn-lg"
            >
              <span>Request a Project Proposal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;