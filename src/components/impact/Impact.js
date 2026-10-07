import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IMPACT_METRICS, FIELD_VIDEOS, FIELD_GALLERY } from '../../data/blgmData';
import './Impact.css';

const Impact = () => {
  const history = useHistory();
  const [activeVideo, setActiveVideo] = useState(FIELD_VIDEOS[0]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const gallerySections = [
    {
      key: 'school',
      tag: 'Mobile Schools',
      icon: 'fa-solid fa-school',
      title: 'Mobile School Donations',
      subtitle: 'Mobile schools and classroom setups donated directly to underserved communities in Nigeria.',
      direction: 'left',
      speed: '48s',
      items: FIELD_GALLERY.filter(p => p.category === 'school')
    },
    {
      key: 'bag',
      tag: 'Student Bags',
      icon: 'fa-solid fa-bag-shopping',
      title: 'Student School Bag & Supplies Donations',
      subtitle: 'School bags, textbooks, exercise books, and learning supplies donated to students in our school.',
      direction: 'right',
      speed: '38s',
      items: FIELD_GALLERY.filter(p => p.category === 'bag')
    },
    {
      key: 'scholaship',
      tag: 'Scholarships',
      icon: 'fa-solid fa-graduation-cap',
      title: 'Student Educational Scholarships',
      subtitle: 'Full educational scholarships given to underprivileged students and crisis-affected youth.',
      direction: 'left',
      speed: '44s',
      items: FIELD_GALLERY.filter(p => p.category === 'scholaship')
    },
    {
      key: 'borehole',
      tag: 'Clean Water Boreholes',
      icon: 'fa-solid fa-faucet-drip',
      title: 'Community Clean Water Boreholes',
      subtitle: 'Deep clean water boreholes equipped with durable manual hand pumps donated to communities across Nigeria.',
      direction: 'right',
      speed: '52s',
      items: FIELD_GALLERY.filter(p => p.category === 'borehole')
    },
    {
      key: 'food',
      tag: 'Food Distribution',
      icon: 'fa-solid fa-bowl-food',
      title: 'Community Food Relief Distributions',
      subtitle: 'Emergency nutritional relief and food packages given to vulnerable families in the community.',
      direction: 'left',
      speed: '36s',
      items: FIELD_GALLERY.filter(p => p.category === 'food')
    },
    {
      key: 'training',
      tag: 'Teacher & Leader Training',
      icon: 'fa-solid fa-chalkboard-user',
      title: 'Free Leadership & Teacher Training',
      subtitle: 'Free capacity-building workshops and pedagogical training given to community leaders and our mobile school teachers.',
      direction: 'right',
      speed: '42s',
      items: FIELD_GALLERY.filter(p => p.category === 'training')
    },
    {
      key: 'chaplaincy',
      tag: 'Chaplaincy & Faith Outreach',
      icon: 'fa-solid fa-shield-halved',
      title: 'My Ministry with the Chaplaincy',
      subtitle: 'Police chaplaincy service, pastoral care, moral fortitude, and \'Bring Them Young\' Bible distribution outreach.',
      direction: 'left',
      speed: '56s',
      items: FIELD_GALLERY.filter(p => p.category === 'chaplaincy')
    },
    {
      key: 'partner',
      tag: 'Partnerships & Community Care',
      icon: 'fa-solid fa-handshake',
      title: 'Collaborative Partnerships, Community Care & Thanksgiving',
      subtitle: 'Grassroots consultations, direct community care, and local thanksgiving celebrations ensuring enduring community ownership.',
      direction: 'right',
      speed: '40s',
      items: FIELD_GALLERY.filter(p => p.category === 'partner' || p.category === 'community' || p.category === 'care')
    }
  ];

  const getRepeatedItems = (items, minCount = 10) => {
    if (!items || items.length === 0) return [];
    let list = [...items];
    while (list.length < minCount) {
      list = [...list, ...items];
    }
    return [...list, ...list];
  };

  return (
    <div className="blgm-impact-page">
      {/* Hero Banner */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img src="/images/gallery/borehole10.jpg" alt="BLGM Community Impact" className="blgm-page-hero-img" />
          <div className="blgm-page-hero-overlay"></div>
        </div>

        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-eyebrow blgm-eyebrow-dark">
            <i className="fa-solid fa-chart-line"></i>
            <span>Verifiable Evidence & Community Voice</span>
          </div>
          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF' }}>
            Impact You Can See, Hear, and Verify.
          </h1>
          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 740 }}>
            Every statistic represents a real child in a classroom, a family drinking uncontaminated water, and a community taking ownership of its future.
          </p>
        </div>
      </section>

      {/* 1. VERIFIED METRIC DASHBOARD */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-square-poll-vertical"></i>
              <span>Ground Truth</span>
            </div>
            <h2 className="blgm-heading-xl">Verified Field Dashboard</h2>
            <p className="blgm-lead">
              Strictly grounded in documented field achievements across Plateau State and North-Central Nigeria.
            </p>
          </div>

          <div className="blgm-impact-metrics-dashboard">
            {IMPACT_METRICS.map((metric) => (
              <div className="blgm-card blgm-metric-dashboard-card" key={metric.id}>
                <div className="blgm-metric-dash-icon">
                  <i className={`fa-solid ${metric.icon}`}></i>
                </div>
                <div className="blgm-metric-dash-value">{metric.value}</div>
                <h3 className="blgm-metric-dash-label">{metric.label}</h3>
                <p className="blgm-metric-dash-desc">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. FIELD VIDEO DOCUMENTARY THEATER */}
      <section className="blgm-section blgm-section-dark">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow blgm-eyebrow-dark">
              <i className="fa-solid fa-film"></i>
              <span>Live Video Recordings</span>
            </div>
            <h2 className="blgm-heading-xl" style={{ color: '#FFFFFF' }}>
              Field Video Documentaries
            </h2>
            <p className="blgm-lead" style={{ color: 'var(--text-inverse-muted)' }}>
              Watch primary footage of clean water flowing, heavy drilling machinery at work, and community celebrations with Rev. Fidelis Gambo.
            </p>
          </div>

          <div className="blgm-video-theater-grid">
            <div className="blgm-video-main-screen">
              <div className="blgm-theater-player-box">
                <video 
                  key={activeVideo.id} 
                  controls 
                  preload="metadata"
                  className="blgm-theater-video"
                >
                  <source src={activeVideo.videoSrc} type="video/mp4" />
                  Your browser does not support video playback.
                </video>
              </div>

              <div className="blgm-theater-details">
                <div className="blgm-theater-meta">
                  <span className="blgm-badge-tag"><i className="fa-solid fa-location-dot"></i> {activeVideo.location}</span>
                  <span className="blgm-badge-tag"><i className="fa-solid fa-user"></i> {activeVideo.speaker}</span>
                </div>
                <h3 className="blgm-theater-title">{activeVideo.title}</h3>
                <p className="blgm-theater-desc">{activeVideo.description}</p>
              </div>
            </div>

            <div className="blgm-theater-playlist-col">
              <h4 className="blgm-theater-playlist-title">Select Recording:</h4>
              <div className="blgm-theater-playlist">
                {FIELD_VIDEOS.map((vid) => (
                  <div 
                    key={vid.id}
                    className={`blgm-theater-thumb-card ${activeVideo.id === vid.id ? 'active' : ''}`}
                    onClick={() => setActiveVideo(vid)}
                  >
                    <div className="blgm-thumb-icon">
                      <i className={activeVideo.id === vid.id ? "fa-solid fa-circle-play" : "fa-solid fa-video"}></i>
                    </div>
                    <div className="blgm-thumb-info">
                      <h5>{vid.title}</h5>
                      <span className="blgm-thumb-speaker">{vid.speaker}</span>
                      <span className="blgm-thumb-loc">{vid.location}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="blgm-theater-trust-note">
                <i className="fa-solid fa-shield-check"></i>
                <p>All footage recorded on-site during BLGM field expeditions in Nigeria.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIELD PHOTO ARCHIVE BY CATEGORY */}
      <section className="blgm-section blgm-archive-section">
        <div className="blgm-container">
          <div className="blgm-section-header">
            <div className="blgm-eyebrow">
              <i className="fa-solid fa-layer-group"></i>
              <span>Categorized Field Archives</span>
            </div>
            <h2 className="blgm-heading-xl">Authentic Field Moments by Initiative</h2>
            <p className="blgm-lead">
              Explore authentic field documentation organized into dedicated sections for each initiative. Every gallery automatically scrolls to the left or right—hover over any image to pause, or click to view in full resolution.
            </p>

            {/* Quick Navigation Strip */}
            <div className="blgm-gallery-jump-nav">
              <span className="blgm-jump-label">
                <i className="fa-solid fa-compass"></i> Quick Jump to Initiative:
              </span>
              <div className="blgm-jump-pills">
                {gallerySections.map((sec) => (
                  <button 
                    key={sec.key}
                    className="blgm-jump-btn"
                    onClick={() => {
                      const el = document.getElementById(`section-${sec.key}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    <i className={sec.icon}></i>
                    <span>{sec.tag}</span>
                    <span className="blgm-filter-count">({sec.items.length})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Carousel Sections Stack */}
        <div className="blgm-gallery-sections-stack">
          {gallerySections.map((sec) => {
            const repeated = getRepeatedItems(sec.items);
            return (
              <div 
                className="blgm-category-carousel-block" 
                id={`section-${sec.key}`}
                key={sec.key}
              >
                <div className="blgm-container">
                  <div className="blgm-carousel-header">
                    <div className="blgm-carousel-header-info">
                      <div className="blgm-eyebrow">
                        <i className={sec.icon}></i>
                        <span>{sec.tag}</span>
                        <span className="blgm-count-pill">{sec.items.length} Original Photos</span>
                      </div>
                      <h3 className="blgm-heading-md">{sec.title}</h3>
                      <p className="blgm-carousel-subtitle">{sec.subtitle}</p>
                    </div>

                    <div className="blgm-carousel-status-pill">
                      <span className="blgm-scroll-indicator">
                        <i className={`fa-solid ${sec.direction === 'left' ? 'fa-arrow-left' : 'fa-arrow-right'}`}></i>
                        <span>Auto-scrolling {sec.direction === 'left' ? 'Left' : 'Right'}</span>
                      </span>
                      <span className="blgm-pause-tip">
                        <i className="fa-solid fa-pause"></i> Hover to pause
                      </span>
                    </div>
                  </div>
                </div>

                <div className="blgm-carousel-viewport">
                  <div 
                    className={`blgm-carousel-track blgm-scroll-${sec.direction}`}
                    style={{ animationDuration: sec.speed }}
                  >
                    {repeated.map((photo, index) => (
                      <div 
                        className="blgm-carousel-card" 
                        key={`${sec.key}-${photo.id}-${index}`}
                        onClick={() => setSelectedPhoto(photo)}
                        title="Click to view full photo"
                      >
                        <div className="blgm-carousel-img-box">
                          <img src={photo.src} alt={photo.caption} loading="lazy" />
                          <div className="blgm-gallery-hover-overlay">
                            <i className="fa-solid fa-expand"></i>
                            <span>View Photo</span>
                          </div>
                        </div>
                        <div className="blgm-carousel-caption">
                          <h4 className="blgm-gallery-card-title">{photo.title}</h4>
                          <p>{photo.caption}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="blgm-lightbox-overlay" 
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="blgm-lightbox-dialog" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="blgm-lightbox-close" 
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close photo preview"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="blgm-lightbox-img-wrapper">
              <img src={selectedPhoto.src} alt={selectedPhoto.caption} />
            </div>
            <div className="blgm-lightbox-info">
              <span className="blgm-gallery-tag">{selectedPhoto.tag}</span>
              <h3>{selectedPhoto.title}</h3>
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. ANNUAL REPORT & AUDIT TRANSPARENCY */}
      <section className="blgm-section blgm-section-subtle">
        <div className="blgm-container">
          <div className="blgm-report-box">
            <div className="blgm-report-icon-col">
              <i className="fa-solid fa-file-invoice"></i>
            </div>
            <div className="blgm-report-info-col">
              <div className="blgm-eyebrow">
                <i className="fa-solid fa-certificate"></i>
                <span>Institutional Accountability</span>
              </div>
              <h3 className="blgm-heading-lg">BLGM Annual Impact & Fiduciary Reporting</h3>
              <p>
                As a registered non-profit under the Corporate Affairs Commission (CAC) of Nigeria, Brighter Land Global Mission maintains open books and strict accountability to our partners, churches, and donors. We welcome institutional audit inquiries and provide customized project reporting for major grantmakers.
              </p>
              <div className="blgm-report-tags">
                <span><i className="fa-solid fa-check"></i> Project Tracking</span>
                <span><i className="fa-solid fa-check"></i> CAC Compliance</span>
                <span><i className="fa-solid fa-check"></i> Child Protection Vetting</span>
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => history.push('/contact')}
                  className="blgm-btn blgm-btn-primary"
                >
                  <i className="fa-solid fa-envelope-open-text"></i>
                  <span>Request Full Field Dossier</span>
                </button>
                <button 
                  onClick={() => history.push('/donate')}
                  className="blgm-btn blgm-btn-accent"
                >
                  <i className="fa-solid fa-heart"></i>
                  <span>Support Ongoing Projects</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;