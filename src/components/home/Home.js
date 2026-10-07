import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import { IMPACT_METRICS, PROGRAMS_DATA, FIELD_VIDEOS, FIELD_GALLERY } from '../../data/blgmData';
import './Home.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Home = () => {
  const history = useHistory();
  const [selectedVideo, setSelectedVideo] = useState(FIELD_VIDEOS[0]);

  return (
    <div className="blgm-home">
      {/* 1. HERO SECTION */}
      <section className="blgm-hero">
        <div className="blgm-hero-bg">
          <img 
            src="/images/gallery/borehole13.jpg" 
            alt="Brighter Land clean water borehole installation delivering potable water to rural community in Nigeria" 
            className="blgm-hero-image"
          />
          <div className="blgm-hero-overlay"></div>
        </div>

        <div className="blgm-container blgm-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="blgm-hero-text"
          >
            <div className="blgm-eyebrow blgm-eyebrow-dark">
              <i className="fa-solid fa-cross"></i>
              <span>Faith in Action • Plateau State, Nigeria</span>
            </div>

            <h1 className="blgm-hero-title">
              Restoring Hope, Education, and Dignity in Conflict-Affected Communities.
            </h1>

            <p className="blgm-hero-lead">
              Brighter Land Global Mission empowers orphans, displaced children, and marginalized families across Nigeria with quality education scholarships, mobile learning centers, life-saving clean water boreholes, and grassroots servant leadership.
            </p>

            <div className="blgm-hero-actions">
              <button 
                onClick={() => history.push('/donate')}
                className="blgm-btn blgm-btn-accent blgm-btn-lg"
              >
                <i className="fa-solid fa-hand-holding-heart"></i>
                <span>Donate to Transform Lives</span>
              </button>
              
              <button 
                onClick={() => history.push('/programs')}
                className="blgm-btn blgm-btn-outline-white blgm-btn-lg"
              >
                <span>Explore Our Work</span>
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              <button 
                onClick={() => history.push('/impact')}
                className="blgm-hero-video-link"
              >
                <div className="blgm-play-circle">
                  <i className="fa-solid fa-play"></i>
                </div>
                <span>Watch Field Stories</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. VERIFIED IMPACT SNAPSHOT (TRUST BAR) */}
      <section className="blgm-impact-bar">
        <div className="blgm-container">
          <div className="blgm-impact-bar-header">
            <span className="blgm-impact-bar-badge">
              <i className="fa-solid fa-circle-check"></i> Field-Verified Impact Metrics
            </span>
            <span className="blgm-impact-bar-note">
              Direct telemetry from our operational centers in Plateau State & North-Central Nigeria
            </span>
          </div>

          <div className="blgm-impact-stats-grid">
            {IMPACT_METRICS.slice(0, 4).map((metric) => (
              <div className="blgm-impact-stat-item" key={metric.id}>
                <div className="blgm-impact-stat-icon">
                  <i className={`fa-solid ${metric.icon}`}></i>
                </div>
                <div className="blgm-impact-stat-data">
                  <div className="blgm-impact-stat-value">{metric.value}</div>
                  <div className="blgm-impact-stat-label">{metric.label}</div>
                  <div className="blgm-impact-stat-desc">{metric.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY WE EXIST: THE URGENT REALITY */}
      <section className="blgm-section blgm-section-why">
        <div className="blgm-container">
          <div className="blgm-why-grid">
            <motion.div 
              className="blgm-why-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <div className="blgm-eyebrow">
                <i className="fa-solid fa-compass"></i>
                <span>Why We Exist</span>
              </div>
              <h2 className="blgm-heading-xl">
                When crisis displaces families, a child’s right to learn and thrive cannot wait.
              </h2>
              <p className="blgm-lead">
                Across remote parts of North-Central Nigeria, protracted conflicts and socio-economic displacement leave thousands of children without access to schools, while entire villages drink from contaminated surface streams.
              </p>
              <p>
                Founded in 2015 and incorporated in 2024, Brighter Land Global Mission stands in this gap. We believe that Christian love is proven through practical service. Where permanent infrastructure is destroyed or absent, we deploy <strong>Mobile Schools</strong>, provide direct <strong>scholarships</strong> for orphaned children, drill <strong>deep clean water boreholes with manual hand pumps</strong>, and equip <strong>community leaders</strong> to guide their people toward lasting peace and self-reliance.
              </p>

              <div className="blgm-why-pillars">
                <div className="blgm-why-pillar">
                  <i className="fa-solid fa-book-open-reader"></i>
                  <div>
                    <h4>Immediate Learning Access</h4>
                    <p>Overcoming school closures with mobile classrooms and full learning packs.</p>
                  </div>
                </div>
                <div className="blgm-why-pillar">
                  <i className="fa-solid fa-droplet"></i>
                  <div>
                    <h4>Potable Water Infrastructure</h4>
                    <p>Community boreholes with manual hand pumps eliminating waterborne diseases and school absenteeism.</p>
                  </div>
                </div>
              </div>

              <div className="blgm-why-cta">
                <button 
                  onClick={() => history.push('/about')}
                  className="blgm-btn blgm-btn-primary"
                >
                  <span>Our Story & Governance</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </motion.div>

            <div className="blgm-why-visual">
              <div className="blgm-why-image-wrapper">
                <img 
                  src="/images/gallery/mobile school4.jpg" 
                  alt="Young learners participating in BLGM Mobile School" 
                  className="blgm-why-img-main"
                />
                <div className="blgm-why-card-floater">
                  <div className="blgm-floater-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <p>
                    "We do not simply distribute aid; we build the local capacity for children and communities to rise with dignity."
                  </p>
                  <span className="blgm-floater-author">— Rev. Fidelis Gambo, Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR THREE PILLARS OF WORK */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-layer-group"></i>
              <span>Our Strategic Programmes</span>
            </div>
            <h2 className="blgm-heading-xl">
              Holistic Solutions: Problem <span className="blgm-heading-arrow">→</span> Action <span className="blgm-heading-arrow">→</span> Impact
            </h2>
            <p className="blgm-lead">
              Every initiative is structured with clear accountability, local community ownership, and measurable transformation.
            </p>
          </div>

          <div className="blgm-programmes-grid">
            {PROGRAMS_DATA.map((prog, index) => (
              <motion.div 
                className="blgm-card blgm-programme-card"
                key={prog.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeInUp}
              >
                <div className="blgm-programme-media">
                  <img src={prog.image} alt={prog.title} />
                  <span className="blgm-programme-tag">{prog.category}</span>
                </div>

                <div className="blgm-programme-body">
                  <h3 className="blgm-programme-title">{prog.title}</h3>
                  <p className="blgm-programme-sub">{prog.subtitle}</p>

                  <div className="blgm-programme-breakdown">
                    <div className="blgm-pb-item">
                      <span className="blgm-pb-label">The Challenge:</span>
                      <p className="blgm-pb-text">{prog.problem}</p>
                    </div>

                    <div className="blgm-pb-item">
                      <span className="blgm-pb-label">Our Solution:</span>
                      <p className="blgm-pb-text">{prog.approach}</p>
                    </div>

                    <div className="blgm-pb-impact-badge">
                      <i className="fa-solid fa-chart-line"></i>
                      <span><strong>Impact:</strong> {prog.impactSummary}</span>
                    </div>
                  </div>

                  <div className="blgm-programme-footer">
                    <button
                      onClick={() => history.push(`/programs/${prog.slug}`)}
                      className="blgm-btn blgm-btn-outline blgm-btn-sm"
                    >
                      <span>Explore Programme</span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                    <button
                      onClick={() => history.push('/donate')}
                      className="blgm-btn blgm-btn-accent blgm-btn-sm"
                    >
                      <span>Support This Work</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED EDITORIAL STORY */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-featured-story">
            <div className="blgm-story-grid">
              <div className="blgm-story-visual">
                <img 
                  src="/images/gallery/borehole10.jpg" 
                  alt="Community celebration of clean drinking water" 
                  className="blgm-story-img"
                />
                <div className="blgm-story-badge">
                  <i className="fa-solid fa-book-bookmark"></i> Featured Field Story
                </div>
              </div>

              <div className="blgm-story-narrative">
                <div className="blgm-eyebrow">
                  <i className="fa-solid fa-droplet"></i>
                  <span>Clean Water in Plateau State</span>
                </div>
                <h2 className="blgm-heading-lg">
                  Water in the Wilderness: How 6+ Deep Boreholes Are Revitalizing Villages
                </h2>
                <div className="blgm-story-meta">
                  <span><i className="fa-solid fa-calendar-day"></i> Verified Field Report</span>
                  <span>•</span>
                  <span><i className="fa-solid fa-location-dot"></i> Plateau State, Nigeria</span>
                </div>
                <p>
                  Before Brighter Land Global Mission mobilized drilling rigs into the community, mothers and children walked an average of 4 kilometers twice daily to fetch stagnant stream water. Typhoid and dysentery were chronic burdens that kept children out of school and drained family livelihoods on medical clinics.
                </p>
                <p>
                  Today, deep boreholes equipped with durable manual hand pumps provide continuous, tested potable water right in the village centers. Over 3,000 community members now have reliable, clean water. School enrollment at our mobile learning facilities increased immediately, and the village council established a water committee to maintain the infrastructure for future generations.
                </p>

                <div className="blgm-story-quote">
                  <i className="fa-solid fa-quote-left"></i>
                  <p>
                    "When clean water flowed for the first time, our children cheered. Our daughters no longer walk through unsafe bush in the early dawn hours. BLGM gave us health and peace."
                  </p>
                  <span>— Village Community Elder & Beneficiary</span>
                </div>

                <div className="blgm-story-actions">
                  <button 
                    onClick={() => history.push('/impact')}
                    className="blgm-btn blgm-btn-primary"
                  >
                    <span>Read More Field Reports</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                  <button 
                    onClick={() => history.push('/donate')}
                    className="blgm-btn blgm-btn-outline"
                  >
                    <span>Co-Fund a Borehole</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DOCUMENTARY VIDEO SHOWCASE */}
      <section className="blgm-section blgm-section-dark">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow blgm-eyebrow-dark">
              <i className="fa-solid fa-video"></i>
              <span>Authentic Field Documentation</span>
            </div>
            <h2 className="blgm-heading-xl" style={{ color: '#FFFFFF' }}>
              Witness Transformation: Live From the Field
            </h2>
            <p className="blgm-lead" style={{ color: 'var(--text-inverse-muted)' }}>
              Watch unedited documentary footage of Rev. Fidelis Gambo, heavy borehole drilling equipment in action, and community members receiving clean water.
            </p>
          </div>

          <div className="blgm-video-showcase">
            <div className="blgm-video-player-frame">
              <video 
                key={selectedVideo.id}
                controls 
                preload="metadata"
                className="blgm-video-element"
              >
                <source src={selectedVideo.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="blgm-video-caption-bar">
                <div className="blgm-video-caption-text">
                  <h4>{selectedVideo.title}</h4>
                  <p>{selectedVideo.speaker} ({selectedVideo.role}) — {selectedVideo.location}</p>
                </div>
                <span className="blgm-video-badge">
                  <i className="fa-solid fa-circle-dot"></i> Live Recording
                </span>
              </div>
            </div>

            {/* Video Selector List */}
            <div className="blgm-video-playlist">
              <h4 className="blgm-playlist-heading">Field Recordings:</h4>
              {FIELD_VIDEOS.map((video) => (
                <div 
                  key={video.id}
                  className={`blgm-playlist-item ${selectedVideo.id === video.id ? 'active' : ''}`}
                  onClick={() => setSelectedVideo(video)}
                >
                  <div className="blgm-playlist-icon">
                    <i className={selectedVideo.id === video.id ? "fa-solid fa-play" : "fa-solid fa-film"}></i>
                  </div>
                  <div className="blgm-playlist-info">
                    <h5>{video.title}</h5>
                    <p>{video.speaker} • {video.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY: HOW WE CREATE CHANGE */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-gears"></i>
              <span>Our Sustainable Model</span>
            </div>
            <h2 className="blgm-heading-xl">
              How We Create Enduring Transformation
            </h2>
            <p className="blgm-lead">
              We do not impose top-down solutions. Our four-stage methodology ensures local community ownership, sustainable stewardship, and lasting self-reliance.
            </p>
          </div>

          <div className="blgm-methodology-grid">
            <div className="blgm-method-card">
              <div className="blgm-method-number">01</div>
              <div className="blgm-method-icon">
                <i className="fa-solid fa-ear-listen"></i>
              </div>
              <h4>Grassroots Listening & Assessment</h4>
              <p>
                Our field teams meet directly with village chiefs, pastors, and mothers' groups to identify specific gaps in education, clean water access, and orphan vulnerability.
              </p>
            </div>

            <div className="blgm-method-card">
              <div className="blgm-method-number">02</div>
              <div className="blgm-method-icon">
                <i className="fa-solid fa-truck-fast"></i>
              </div>
              <h4>Rapid Mobile Deployment</h4>
              <p>
                We immediately establish Mobile School centers and mobilize drilling contractors, ensuring children do not lose crucial developmental years while waiting for permanent buildings.
              </p>
            </div>

            <div className="blgm-method-card">
              <div className="blgm-method-number">03</div>
              <div className="blgm-method-icon">
                <i className="fa-solid fa-people-roof"></i>
              </div>
              <h4>Community Stewardship</h4>
              <p>
                Villages appoint local water caretakers and education mentors. We train these local stakeholders to manage, protect, and maintain all installed infrastructure.
              </p>
            </div>

            <div className="blgm-method-card">
              <div className="blgm-method-number">04</div>
              <div className="blgm-method-icon">
                <i className="fa-solid fa-hands-holding-circle"></i>
              </div>
              <h4>Holistic Empowerment & Faith</h4>
              <p>
                Through Bible distribution ('Bring Them Young'), leadership seminars, and vocational training, we equip the next generation with moral courage and economic self-sufficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FIELD PHOTO STORY CAROUSEL / HIGHLIGHTS */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-camera-retro"></i>
              <span>From the Ground</span>
            </div>
            <h2 className="blgm-heading-xl">Authentic Faces of Hope</h2>
            <p className="blgm-lead">
              A glimpse into the real children, classrooms, water points, and communities we serve daily across Nigeria.
            </p>
          </div>

          <div className="blgm-gallery-preview-grid">
            {FIELD_GALLERY.slice(0, 8).map((photo) => (
              <div 
                className="blgm-gallery-preview-item" 
                key={photo.id}
                onClick={() => history.push('/impact')}
                style={{ cursor: 'pointer' }}
                title={`${photo.title} — View in Impact Gallery`}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="blgm-gallery-overlay">
                  <p style={{ fontWeight: 700, marginBottom: '0.25rem' }}>{photo.title}</p>
                  <p>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="blgm-gallery-cta">
            <button 
              onClick={() => history.push('/impact')}
              className="blgm-btn blgm-btn-outline"
            >
              <span>View Full Photo & Video Archive</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* 9. WAYS TO ENGAGE & CALL TO ACTION */}
      <section className="blgm-section blgm-section-cta">
        <div className="blgm-container">
          <div className="blgm-cta-box">
            <div className="blgm-cta-text">
              <div className="blgm-eyebrow blgm-eyebrow-dark">
                <i className="fa-solid fa-heart"></i>
                <span>Join the Mission Today</span>
              </div>
              <h2 className="blgm-heading-xl" style={{ color: '#FFFFFF' }}>
                Every Child Deserves an Education. Every Village Deserves Clean Water.
              </h2>
              <p style={{ color: 'var(--text-inverse-muted)', fontSize: '1.15rem' }}>
                Whether you are an international donor, a church, a corporate CSR partner, or an individual supporter, your partnership directly changes lives on the ground in Nigeria.
              </p>
            </div>

            <div className="blgm-cta-cards">
              <div className="blgm-cta-card">
                <i className="fa-solid fa-graduation-cap"></i>
                <h4>Sponsor a Child</h4>
                <p>₦35,000 / $35 per month provides full tuition, textbooks, and nutrition.</p>
                <button 
                  onClick={() => history.push('/donate')}
                  className="blgm-btn blgm-btn-accent blgm-btn-sm"
                >
                  Sponsor Now
                </button>
              </div>

              <div className="blgm-cta-card">
                <i className="fa-solid fa-handshake"></i>
                <h4>Partner with Us</h4>
                <p>Collaborate on institutional grants, church missions, or corporate CSR.</p>
                <button 
                  onClick={() => history.push('/get-involved')}
                  className="blgm-btn blgm-btn-outline-white blgm-btn-sm"
                >
                  Partner Pathway
                </button>
              </div>

              <div className="blgm-cta-card">
                <i className="fa-solid fa-hands-praying"></i>
                <h4>Pray With Us</h4>
                <p>Stand in prayer for peace, children's safety, and community recovery in Nigeria.</p>
                <button 
                  onClick={() => history.push('/get-involved')}
                  className="blgm-btn blgm-btn-outline-white blgm-btn-sm"
                >
                  Prayer Requests
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;