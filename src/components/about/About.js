import React from 'react';
import { useHistory } from 'react-router-dom';
import { LEADERSHIP_DATA } from '../../data/blgmData';
import './about.css';

const About = () => {
  const history = useHistory();

  return (
    <div className="blgm-about-page">
      {/* Hero Banner */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img 
            src="/images/gallery/community.jpg" 
            alt="Brighter Land Global Mission field work" 
            className="blgm-page-hero-img" 
          />
          <div className="blgm-page-hero-overlay"></div>
        </div>
        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-eyebrow blgm-eyebrow-dark">
            <i className="fa-solid fa-users"></i>
            <span>About Brighter Land Global Mission</span>
          </div>
          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF' }}>
            Faith That Serves. Hope That Endures.
          </h1>
          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 740 }}>
            Dedicated to breaking educational barriers for orphans, drilling life-saving clean water boreholes, and fostering sustainable community recovery across Nigeria.
          </p>
        </div>
      </section>

      {/* 1. WHO WE ARE & GENESIS */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-about-story-grid">
            <div className="blgm-about-story-text">
              <div className="blgm-eyebrow">
                <i className="fa-solid fa-seedling"></i>
                <span>Our Genesis & Mandate</span>
              </div>
              <h2 className="blgm-heading-xl">
                Our Genesis & Mandate
              </h2>
              <p className="blgm-lead">
                Brighter Land Global Mission was established in 2015 and fully incorporated in 2024. It is dedicated to supporting education, community development, food security, and livelihood (skills development) for underprivileged, marginalized groups, and conflict-affected communities in Nigeria.
              </p>
              <p>
                Our mandate is to create an enabling environment where children and women have equal access to education, food, potable water, skills, and facilities that support modern teaching. Dedicated individuals from within Nigeria and abroad have generously supported our organization with resources and encouragement.
              </p>
              <p>
                We currently have educational programs with more than 60 beneficiaries and have supported and improved several communities by providing potable drinking water, mobile schools, and school materials to facilitate learning. BLGM has also reached out to communities in Kaduna during conflict by providing food items and non-food items. We advocate for our core values through various platforms, supporting and creating projects that address educational and socio-economic challenges.
              </p>

              <div className="blgm-about-milestone-strip">
                <div className="blgm-milestone-box">
                  <span className="blgm-milestone-year">2015</span>
                  <span className="blgm-milestone-label">Established</span>
                  <p>Founded on the ground to serve underprivileged & conflict-affected groups.</p>
                </div>
                <div className="blgm-milestone-box">
                  <span className="blgm-milestone-year">60+</span>
                  <span className="blgm-milestone-label">Beneficiaries</span>
                  <p>Active educational programs, mobile schools & potable drinking water.</p>
                </div>
                <div className="blgm-milestone-box">
                  <span className="blgm-milestone-year">2024</span>
                  <span className="blgm-milestone-label">Fully Incorporated</span>
                  <p>CAC incorporation enabling scalable development & relief partnerships.</p>
                </div>
              </div>
            </div>

            <div className="blgm-about-story-visual">
              <img 
                src="/images/gallery/care4.jpg" 
                alt="BLGM field team providing community care and support in Nigeria" 
                className="blgm-about-img-main"
              />
              <div className="blgm-about-stat-floater">
                <div className="blgm-about-stat-num">10+</div>
                <div className="blgm-about-stat-text">Years of frontline community presence in Nigeria</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MISSION, VISION & CORE VALUES */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-mvv-cards-grid">
            <div className="blgm-card blgm-mvv-card">
              <div className="blgm-mvv-icon blgm-mvv-mission">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <h3 className="blgm-heading-lg">Our Mission</h3>
              <p>
                Our organization is dedicated to supporting and empowering marginalised, underprivileged groups, and conflict-affected communities through the provision of equitable education, skills training, livelihood opportunities, and a holistic approach to fostering community development and recovery founded on respect for diverse religious beliefs.
              </p>
            </div>

            <div className="blgm-card blgm-mvv-card">
              <div className="blgm-mvv-icon blgm-mvv-vision">
                <i className="fa-solid fa-eye"></i>
              </div>
              <h3 className="blgm-heading-lg">Our Vision</h3>
              <p>
                To create better communities where underprivileged children and marginalized groups, regardless of their religious beliefs, have equal access to quality education, marketable skills, and sustainable livelihoods. We aim to build inclusive and resilient communities that are stabilized through equitable development and recovery from conflict.
              </p>
            </div>
          </div>

          <div className="blgm-values-block">
            <div className="blgm-section-header" style={{ marginBottom: '2.5rem' }}>
              <div className="blgm-eyebrow">
                <i className="fa-solid fa-heart"></i>
                <span>Guiding Principles</span>
              </div>
              <h2 className="blgm-heading-xl">Our Core Values</h2>
              <p className="blgm-lead">The non-negotiable principles that guide every field decision, dollar allocated, and community partnership.</p>
            </div>

            <div className="blgm-values-grid">
              <div className="blgm-value-item">
                <div className="blgm-value-icon">
                  <i className="fa-solid fa-hand-holding-heart"></i>
                </div>
                <h4>Compassion in Action</h4>
                <p>Serving the vulnerable with empathy, dignity, and personal sacrificial commitment.</p>
              </div>

              <div className="blgm-value-item">
                <div className="blgm-value-icon">
                  <i className="fa-solid fa-scale-balanced"></i>
                </div>
                <h4>Fiduciary Integrity</h4>
                <p>Total transparency, strict accountability to donors, and zero tolerance for mismanagement.</p>
              </div>

              <div className="blgm-value-item">
                <div className="blgm-value-icon">
                  <i className="fa-solid fa-person-circle-check"></i>
                </div>
                <h4>Dignity & Equity</h4>
                <p>Every child is created in the image of God and deserves equal opportunity to learn and thrive.</p>
              </div>

              <div className="blgm-value-item">
                <div className="blgm-value-icon">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <h4>Community Sustainability</h4>
                <p>Fostering local ownership so that schools, boreholes, and farms flourish for generations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAITH IDENTITY: "FAITH THAT SERVES" */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-faith-panel">
            <div className="blgm-faith-content">
              <div className="blgm-eyebrow">
                <i className="fa-solid fa-cross"></i>
                <span>Our Christian Motivation</span>
              </div>
              <h2 className="blgm-heading-xl">
                Faith Expressed Through Practical, Unconditional Love
              </h2>
              <p className="blgm-lead">
                Brighter Land Global Mission is unashamedly motivated by the Gospel of Jesus Christ. Yet our faith is not a barrier—it is an open door of service.
              </p>
              <p>
                In the spirit of the Good Samaritan, we serve individuals and communities regardless of their religious affiliation, ethnic heritage, or background. We believe that caring for the orphan, feeding the hungry, bringing water to the thirsty, and teaching the displaced is the purest practical reflection of Christian devotion.
              </p>
              <div className="blgm-faith-quote">
                <i className="fa-solid fa-quote-left"></i>
                <p>
                  "Religion that God our Father accepts as pure and faultless is this: to look after orphans and widows in their distress and to keep oneself from being polluted by the world."
                </p>
                <span>— James 1:27</span>
              </div>
            </div>

            <div className="blgm-faith-sidebar">
              <div className="blgm-faith-card">
                <h4>How Our Faith Shapes Us:</h4>
                <ul>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Inclusive Service:</strong> Aid is provided purely based on vulnerability, never conditional on conversion or affiliation.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Integrity of Stewardship:</strong> Treating every gift and grant as a holy trust held before God.</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <span><strong>Spiritual Resilience:</strong> Equipping local pastors and mentors through the 'Bring Them Young' youth initiative.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP & GOVERNANCE */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-user-shield"></i>
              <span>Organizational Stewardship</span>
            </div>
            <h2 className="blgm-heading-xl">Leadership & Governance</h2>
            <p className="blgm-lead">
              Grounded in experienced field leadership and independent governance.
            </p>
          </div>

          <div className="blgm-leadership-grid">
            {LEADERSHIP_DATA.map((leader, index) => (
              <div className="blgm-card blgm-leader-card" key={index}>
                <div className="blgm-leader-image-frame">
                  <img src={leader.image} alt={leader.name} loading="lazy" />
                </div>

                <div className="blgm-leader-details">
                  <h3 className="blgm-leader-name">{leader.name}</h3>
                  <div className="blgm-leader-role">{leader.role}</div>
                  <p className="blgm-leader-bio">{leader.bio}</p>

                  {leader.socials && (
                    <div className="blgm-leader-socials">
                      {leader.socials.map((s, i) => (
                        <a href={s.url} key={i} target="_blank" rel="noopener noreferrer" aria-label={`${leader.name} social link`}>
                          <i className={s.icon}></i>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SAFEGUARDING & ACCOUNTABILITY */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-safeguarding-box">
            <div className="blgm-safeguarding-header">
              <i className="fa-solid fa-shield-halved"></i>
              <div>
                <h3 className="blgm-heading-lg">Child Safeguarding & Protection Policy</h3>
                <p>Our binding commitment to every child entrusted to our care.</p>
              </div>
            </div>

            <div className="blgm-safeguarding-grid">
              <div className="blgm-safe-item">
                <i className="fa-solid fa-lock"></i>
                <h4>Zero Tolerance for Abuse</h4>
                <p>Mandatory background vetting for all volunteer teachers and field officers with strict child protection protocols.</p>
              </div>
              <div className="blgm-safe-item">
                <i className="fa-solid fa-camera-slash"></i>
                <h4>Dignified Media Ethics</h4>
                <p>We respect child privacy and dignity; photographs and videos are captured strictly with community consent and without exploitative portrayals.</p>
              </div>
              <div className="blgm-safe-item">
                <i className="fa-solid fa-file-shield"></i>
                <h4>Independent Fiduciary Audit</h4>
                <p>All programme expenditures are documented, tracked, and subject to regular Board and regulatory review under Nigerian non-profit guidelines.</p>
              </div>
            </div>

            <div className="blgm-safeguarding-footer">
              <span className="blgm-content-flag">
                <i className="fa-solid fa-file-pdf"></i>
                <span>CONTENT REQUIRED: Full BLGM Child Safeguarding Policy PDF upload</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="blgm-section blgm-section-cta">
        <div className="blgm-container" style={{ textAlign: 'center' }}>
          <h2 className="blgm-heading-xl" style={{ marginBottom: '1.25rem' }}>
            Ready to Stand With Us?
          </h2>
          <p className="blgm-lead" style={{ maxWidth: 640, margin: '0 auto 2.5rem auto' }}>
            Your support sponsors a child’s education, provides clean water to a whole village, and empowers communities with enduring hope.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button 
              onClick={() => history.push('/donate')}
              className="blgm-btn blgm-btn-accent blgm-btn-lg"
            >
              <i className="fa-solid fa-heart"></i>
              <span>Donate Now</span>
            </button>
            <button 
              onClick={() => history.push('/contact')}
              className="blgm-btn blgm-btn-outline blgm-btn-lg"
            >
              <span>Get in Touch with Rev. Gambo</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;