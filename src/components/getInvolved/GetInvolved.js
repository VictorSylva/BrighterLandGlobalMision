import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './GetInvolved.css';

const GetInvolved = () => {
  const history = useHistory();
  const [activeTab, setActiveTab] = useState('partner'); // 'partner' | 'volunteer' | 'pray' | 'advocate'

  return (
    <div className="blgm-get-involved-page">
      {/* Page Hero */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img src="/images/gallery/partner.jpg" alt="BLGM Community Partnership" className="blgm-page-hero-img" />
          <div className="blgm-page-hero-overlay"></div>
        </div>

        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-eyebrow blgm-eyebrow-dark">
            <i className="fa-solid fa-handshake-angle"></i>
            <span>Stand With Us</span>
          </div>
          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF', maxWidth: 840 }}>
            Every Hand Strengthens a Community in Need.
          </h1>
          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 740 }}>
            Whether you represent a church, foundation, corporate CSR department, or are an individual moved to volunteer or pray, there is a clear place for you in this mission.
          </p>
        </div>
      </section>

      {/* Pathways Selector Strip */}
      <section className="blgm-section blgm-section-subtle" style={{ padding: '3.5rem 0' }}>
        <div className="blgm-container">
          <div className="blgm-pathways-nav">
            <button 
              className={`blgm-pathway-tab ${activeTab === 'partner' ? 'active' : ''}`}
              onClick={() => setActiveTab('partner')}
            >
              <i className="fa-solid fa-handshake"></i>
              <span>Institutional & Corporate Partnership</span>
            </button>
            <button 
              className={`blgm-pathway-tab ${activeTab === 'volunteer' ? 'active' : ''}`}
              onClick={() => setActiveTab('volunteer')}
            >
              <i className="fa-solid fa-hands-helping"></i>
              <span>Volunteer Your Skills</span>
            </button>
            <button 
              className={`blgm-pathway-tab ${activeTab === 'pray' ? 'active' : ''}`}
              onClick={() => setActiveTab('pray')}
            >
              <i className="fa-solid fa-hands-praying"></i>
              <span>Pray With Us</span>
            </button>
            <button 
              className={`blgm-pathway-tab ${activeTab === 'advocate' ? 'active' : ''}`}
              onClick={() => setActiveTab('advocate')}
            >
              <i className="fa-solid fa-bullhorn"></i>
              <span>Advocate & Champion</span>
            </button>
          </div>
        </div>
      </section>

      {/* Dynamic Tab Content */}
      <section className="blgm-section">
        <div className="blgm-container">
          {/* TAB 1: PARTNER */}
          {activeTab === 'partner' && (
            <div className="blgm-pathway-view">
              <div className="blgm-pathway-intro">
                <h2 className="blgm-heading-xl">Partnership Models for Serious Impact</h2>
                <p className="blgm-lead">
                  We collaborate with organizations across the globe seeking trustworthy, on-the-ground implementation partners in Nigeria.
                </p>
              </div>

              <div className="blgm-partner-models-grid">
                <div className="blgm-card blgm-partner-model-card">
                  <div className="blgm-partner-icon">
                    <i className="fa-solid fa-church"></i>
                  </div>
                  <h3>Churches & Mission Ministries</h3>
                  <p>
                    Partner with BLGM for church planting, pastoral mentorship, and youth outreach. Sponsor the 'Bring Them Young' Bible initiative or organize a mission team.
                  </p>
                  <ul className="blgm-partner-checklist">
                    <li><i className="fa-solid fa-check"></i> Direct fellowship with local Nigerian pastors</li>
                    <li><i className="fa-solid fa-check"></i> Youth Bible distribution sponsorships</li>
                    <li><i className="fa-solid fa-check"></i> Mission field reports for your congregation</li>
                  </ul>
                </div>

                <div className="blgm-card blgm-partner-model-card">
                  <div className="blgm-partner-icon">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <h3>Corporate CSR Initiatives</h3>
                  <p>
                    Direct your Corporate Social Responsibility funds toward measurable community assets: deep water boreholes, school packs, or women’s vocational livelihood training.
                  </p>
                  <ul className="blgm-partner-checklist">
                    <li><i className="fa-solid fa-check"></i> Co-branded project commissioning plaques</li>
                    <li><i className="fa-solid fa-check"></i> Photographic impact evidence and video</li>
                    <li><i className="fa-solid fa-check"></i> High-governance ESG compliance reporting</li>
                  </ul>
                </div>

                <div className="blgm-card blgm-partner-model-card">
                  <div className="blgm-partner-icon">
                    <i className="fa-solid fa-landmark"></i>
                  </div>
                  <h3>Foundations & Grantmakers</h3>
                  <p>
                    Deploy catalytic grant capital into hard-to-reach conflict-affected settlements with proven local leadership and low overhead.
                  </p>
                  <ul className="blgm-partner-checklist">
                    <li><i className="fa-solid fa-check"></i> CAC Nigerian incorporated non-profit entity</li>
                    <li><i className="fa-solid fa-check"></i> Structured operational benchmarks & deliverables</li>
                    <li><i className="fa-solid fa-check"></i> Independent board oversight and audit</li>
                  </ul>
                </div>
              </div>

              <div className="blgm-partner-cta-strip">
                <div className="blgm-partner-cta-content">
                  <h3>Begin a Strategic Partnership Dialogue</h3>
                  <p>Contact Rev. Fidelis Gambo and the BLGM leadership team directly for proposals, memorandums of understanding, or site visits.</p>
                </div>
                <button 
                  onClick={() => history.push('/contact')}
                  className="blgm-btn blgm-btn-accent blgm-btn-lg"
                >
                  <i className="fa-solid fa-envelope"></i>
                  <span>Initiate Partnership Inquiry</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: VOLUNTEER */}
          {activeTab === 'volunteer' && (
            <div className="blgm-pathway-view">
              <div className="blgm-pathway-intro">
                <h2 className="blgm-heading-xl">Volunteer Your Professional Skills</h2>
                <p className="blgm-lead">
                  Transformation takes a village. Whether locally in Plateau State or remotely across the diaspora, your talents can build lasting capacity.
                </p>
              </div>

              <div className="blgm-volunteer-roles-grid">
                <div className="blgm-card blgm-volunteer-role">
                  <i className="fa-solid fa-chalkboard-user"></i>
                  <h4>Volunteer Teaching & Tutoring</h4>
                  <p>Help teach foundational reading, mathematics, or teacher training workshops for our mobile school volunteers.</p>
                </div>

                <div className="blgm-card blgm-volunteer-role">
                  <i className="fa-solid fa-laptop-code"></i>
                  <h4>Digital, Creative & Strategy Skills</h4>
                  <p>Help tell our field stories, assist with grant writing, photography editing, or digital outreach.</p>
                </div>

                <div className="blgm-card blgm-volunteer-role">
                  <i className="fa-solid fa-kit-medical"></i>
                  <h4>Community Health & Hygiene Education</h4>
                  <p>Guide water sanitation, hygiene (WASH) workshops, and community first-aid training for rural mothers.</p>
                </div>

                <div className="blgm-card blgm-volunteer-role">
                  <i className="fa-solid fa-people-carry-box"></i>
                  <h4>Field Logistics & Relief Distribution</h4>
                  <p>Support our on-ground team during school pack distributions and emergency food relief missions.</p>
                </div>
              </div>

              <div className="blgm-volunteer-form-cta">
                <button 
                  onClick={() => history.push('/contact')}
                  className="blgm-btn blgm-btn-primary blgm-btn-lg"
                >
                  <span>Submit Volunteer Profile</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: PRAY WITH US */}
          {activeTab === 'pray' && (
            <div className="blgm-pathway-view">
              <div className="blgm-pathway-intro">
                <h2 className="blgm-heading-xl">Pray With Us for Nigeria</h2>
                <p className="blgm-lead">
                  We believe fervent prayer anchors every physical effort. Stand with our workers, teachers, and vulnerable children in intercession.
                </p>
              </div>

              <div className="blgm-prayer-points-list">
                <div className="blgm-prayer-card">
                  <div className="blgm-prayer-icon"><i className="fa-solid fa-shield-halved"></i></div>
                  <div className="blgm-prayer-content">
                    <h4>1. Protection for Displaced Children & Orphans</h4>
                    <p>Pray for physical safety, emotional healing from trauma, and uninterrupted access to schooling for vulnerable children across Plateau State.</p>
                  </div>
                </div>

                <div className="blgm-prayer-card">
                  <div className="blgm-prayer-icon"><i className="fa-solid fa-faucet-drip"></i></div>
                  <div className="blgm-prayer-content">
                    <h4>2. Health and Sustained Clean Water</h4>
                    <p>Pray for our community boreholes and manual hand pumps to continue providing clean, life-giving water without breakdown, and that waterborne diseases remain eradicated.</p>
                  </div>
                </div>

                <div className="blgm-prayer-card">
                  <div className="blgm-prayer-icon"><i className="fa-solid fa-dove"></i></div>
                  <div className="blgm-prayer-content">
                    <h4>3. Peace, Reconciliation and Grassroots Leaders</h4>
                    <p>Pray for community elders, church pastors, and traditional rulers to walk in unity, forgiveness, and wisdom, bringing lasting regional stability.</p>
                  </div>
                </div>

                <div className="blgm-prayer-card">
                  <div className="blgm-prayer-icon"><i className="fa-solid fa-hands-holding"></i></div>
                  <div className="blgm-prayer-content">
                    <h4>4. Wisdom for Rev. Fidelis Gambo & Field Volunteers</h4>
                    <p>Pray for endurance, spiritual discernment, and resource provision as our team travels through remote and fragile rural terrains.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ADVOCATE */}
          {activeTab === 'advocate' && (
            <div className="blgm-pathway-view">
              <div className="blgm-pathway-intro">
                <h2 className="blgm-heading-xl">Be a Voice for the Forgotten</h2>
                <p className="blgm-lead">
                  Share the story of Brighter Land Global Mission with your church, company, or circle of friends.
                </p>
              </div>

              <div className="blgm-advocate-grid">
                <div className="blgm-card blgm-advocate-card">
                  <i className="fa-solid fa-share-nodes"></i>
                  <h4>Share on Social Media</h4>
                  <p>Help amplify the voices of Nigerian children by sharing our verified documentary videos and field stories.</p>
                </div>
                <div className="blgm-card blgm-advocate-card">
                  <i className="fa-solid fa-users-rectangle"></i>
                  <h4>Host a Community Presentation</h4>
                  <p>Request our presentation slide deck to share BLGM's mission with your small group, rotary club, or business network.</p>
                </div>
                <div className="blgm-card blgm-advocate-card">
                  <i className="fa-solid fa-gift"></i>
                  <h4>Dedicate a Birthday or Milestone</h4>
                  <p>Invite friends and family to donate to an orphan's education or a village borehole in lieu of personal gifts.</p>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                <button 
                  onClick={() => history.push('/contact')}
                  className="blgm-btn blgm-btn-primary"
                >
                  <span>Request an Advocate Kit</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
