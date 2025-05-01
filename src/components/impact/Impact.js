import React from 'react';
import { useHistory, Switch, Route, useRouteMatch, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Impact.css';
import OurImpact from '../common/OurImpact';

const VideoStory = () => {
  const { id } = useParams();
  const videoSrc = `/videos/story${id}.mp4`;

  const successStories = [
    {
      name: "Rev. Gambo",
      role: "Launching the borehole",
      story: "We launched the borehole in 2018 and it has been a blessing to the community. The borehole provides clean water to the community."
    },
    {
      name: "Pastor",
      role: "Community Leader",
      story: "Thanking God for the borehole and the impact it has had on the community."
    },
    {
      name: "Rev. Fidelis Gambo",
      role: "Founder and Executive Director",
      story: "showing the borehole drilling"
    }
  ];

  const currentStory = successStories[parseInt(id)];

  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#2F4F4F' }}>
      <h2>{currentStory.name}'s Story</h2>
      <div style={{ margin: '2rem auto', maxWidth: 600 }}>
        <video
          width="100%"
          height="340"
          controls
          style={{ borderRadius: 16, background: '#000' }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div style={{ marginTop: 24, maxWidth: 800, margin: '24px auto' }}>
        <h3 style={{ color: '#2F4F4F', marginBottom: 16 }}>{currentStory.role}</h3>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#666' }}>
          {currentStory.story}
        </p>
      </div>
    </div>
  );
};

const Impact = () => {
  const history = useHistory();
  const { path } = useRouteMatch();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const handleDownloadReport = () => {
    // For now, we'll navigate to a report page
    // In a real implementation, you would trigger a file download
    history.push('/impact/report');
  };

  const successStories = [
    {
      name: "Rev. Gambo",
      role: "Launching the borehole",
      story: "We launched the borehole in 2018 and it has been a blessing to the community. The borehole provides clean water to the community."
    },
    {
      name: "Pastor",
      role: "Community Leader",
      story: "Thanking God for the borehole and the impact it has had on the community."
    },
    {
      name: "Rev. Fidelis Gambo",
      role: "Founder and Executive Director",
      story: "showing the borehole drilling"
    }
  ];

  return (
    <Switch>
      <Route exact path={path}>
        <div className="impact-container">
          <OurImpact />

          {/* Detailed Impact Cards */}
          <motion.section 
            className="detailed-impact"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div 
              className="highlight-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <img src="/images/education.jpg" alt="Education Sponsorship" className="highlight-img" />
              <h2>Education Sponsorship</h2>
              <p className="impact-summary">Over 67 students have received scholarships, and over 9 Mobile Schools have been established.</p>
            </motion.div>
            <motion.div 
              className="highlight-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <img src="/images/community.jpg" alt="Community Development" className="highlight-img" />
              <h2>Community Development</h2>
              <p className="impact-summary">More than 6 boreholes have been drilled, and over 3000 people have been reached with clean water and food in over 10 communities.</p>
            </motion.div>
            <motion.div 
              className="highlight-card"
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <img src="/images/mission.jpg" alt="Mission and Evangelism" className="highlight-img" />
              <h2>Mission and Evangelism</h2>
              <p className="impact-summary">Over 100 leaders trained, now serving in 20+ communities to inspire positive change.</p>
            </motion.div>
          </motion.section>

          <div className="success-stories">
            <h2>Success Stories</h2>
            <div className="stories-grid">
              {successStories.map((story, index) => (
                <div className="story-card" key={index}>
                  <div className="story-content">
                    <h3>{story.name}</h3>
                    <p className="story-role">{story.role}</p>
                    <p className="story-text">{story.story}</p>
                    <button 
                      className="impact-btn"
                      onClick={() => history.push(`/impact/story/${index}`)}
                    >
                      Watch Story
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="annual-report">
            <h2>Annual Impact Report</h2>
            <p>Download our latest annual report to learn more about our achievements and future goals.</p>
            <button 
              className="download-btn"
              onClick={handleDownloadReport}
            >
              Download Report
            </button>
          </div>
        </div>
      </Route>
      <Route path={`${path}/story/:id`}>
        <VideoStory />
      </Route>
    </Switch>
  );
};

export default Impact; 