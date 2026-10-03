import React from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { PROGRAMS_DATA } from '../../data/blgmData';
import './ProgramDetails.css';

const ProgramDetails = () => {
  const { programId } = useParams();
  const history = useHistory();

  // Find program by slug or id
  const program = PROGRAMS_DATA.find(
    p => p.slug === programId || p.id === programId
  );

  if (!program) {
    return (
      <div className="blgm-section" style={{ minHeight: '60vh', textAlign: 'center', paddingTop: '8rem' }}>
        <div className="blgm-container">
          <h1 className="blgm-heading-xl">Programme Not Found</h1>
          <p className="blgm-lead" style={{ margin: '1.5rem 0 2.5rem 0' }}>
            The programme you requested does not exist or has moved.
          </p>
          <button 
            onClick={() => history.push('/programs')}
            className="blgm-btn blgm-btn-primary"
          >
            ← Back to All Programmes
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blgm-prog-detail-page">
      {/* Detail Hero */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img src={program.image} alt={program.title} className="blgm-page-hero-img" />
          <div className="blgm-page-hero-overlay"></div>
        </div>

        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/programs">Our Work</Link>
            <span>/</span>
            <span className="blgm-breadcrumb-current">{program.title}</span>
          </div>

          <div className="blgm-eyebrow blgm-eyebrow-dark" style={{ marginTop: '1rem' }}>
            <i className="fa-solid fa-layer-group"></i>
            <span>{program.category}</span>
          </div>

          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF', maxWidth: 880 }}>
            {program.title}
          </h1>

          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 780 }}>
            {program.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-prog-detail-layout">
            <div className="blgm-prog-detail-main">
              {/* Challenge */}
              <div className="blgm-detail-section">
                <h2 className="blgm-heading-lg">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <span>The Challenge We Address</span>
                </h2>
                <p className="blgm-lead" style={{ color: 'var(--text-primary)' }}>
                  {program.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="blgm-detail-section">
                <h2 className="blgm-heading-lg">
                  <i className="fa-solid fa-compass"></i>
                  <span>Our Field Methodology</span>
                </h2>
                <p>{program.approach}</p>
              </div>

              {/* Actions */}
              <div className="blgm-detail-section">
                <h2 className="blgm-heading-lg">
                  <i className="fa-solid fa-list-check"></i>
                  <span>Specific Activities & Operational Scope</span>
                </h2>
                <div className="blgm-detail-actions-list">
                  {program.actions.map((action, i) => (
                    <div className="blgm-action-card" key={i}>
                      <div className="blgm-action-num">{i + 1}</div>
                      <p>{action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficiaries & Eligibility */}
              <div className="blgm-detail-section">
                <h2 className="blgm-heading-lg">
                  <i className="fa-solid fa-users"></i>
                  <span>Target Beneficiaries & Eligibility</span>
                </h2>
                <p>{program.eligibility}</p>
              </div>

              {/* Verified Outcome */}
              <div className="blgm-detail-impact-box">
                <div className="blgm-impact-box-icon">
                  <i className="fa-solid fa-award"></i>
                </div>
                <div>
                  <h3>Verified Field Impact</h3>
                  <p>{program.impactSummary}</p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="blgm-prog-detail-sidebar">
              <div className="blgm-card blgm-sidebar-card">
                <div className="blgm-eyebrow">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                  <span>Take Action</span>
                </div>
                <h3>Support This Programme</h3>
                <p className="blgm-sidebar-desc">
                  {program.howToHelp}
                </p>

                <button 
                  onClick={() => history.push('/donate')}
                  className="blgm-btn blgm-btn-accent"
                  style={{ width: '100%', marginBottom: '1rem' }}
                >
                  <i className="fa-solid fa-heart"></i>
                  <span>Donate to This Fund</span>
                </button>

                <button 
                  onClick={() => history.push('/contact')}
                  className="blgm-btn blgm-btn-outline"
                  style={{ width: '100%' }}
                >
                  <span>Inquire / Partner</span>
                </button>

                <div className="blgm-sidebar-divider"></div>

                <div className="blgm-sidebar-nav">
                  <h4>Other Key Programmes:</h4>
                  <ul>
                    {PROGRAMS_DATA.filter(p => p.id !== program.id).map(p => (
                      <li key={p.id}>
                        <Link to={`/programs/${p.slug}`}>
                          <i className="fa-solid fa-arrow-right"></i>
                          <span>{p.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramDetails;