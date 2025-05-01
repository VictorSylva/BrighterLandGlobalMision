import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './about.css';
import OurImpact from '../common/OurImpact';

// Reusable animation variants
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

const About = () => {
  const history = useHistory();

  const teamMembers = [
    {
      name: "Rev. Fidelis Gambo",
      role: "Founder & Executive Director",
      bio: "With over 20 years of experience in education and healthcare, Rev. Fidelis Gambo founded the organization to address the critical needs of underserved communities.",
      image: "/images/team/t1.webp",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fab fa-tiktok", url: "#" }
      ]
    },
    {
      name: "Michael Chen",
      role: "Program Director",
      bio: "Michael brings 15 years of experience in program management and has been instrumental in expanding our reach to new communities.",
      image: "/images/team/t2.webp",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fab fa-tiktok", url: "#" }
      ]
    },
    {
      name: "Emma Rodriguez",
      role: "Director of Operations",
      bio: "Emma oversees the day-to-day operations and ensures the efficient delivery of our programs and services.",
      image: "/images/team/t3.webp",
      socials: [
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-instagram", url: "#" },
        { icon: "fab fa-tiktok", url: "#" }
      ]
    }
  ];

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${process.env.PUBLIC_URL}/images/mission-hero.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  };

  const missionImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/mission-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const visionImageStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/vision-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="about-container">
      {/* Hero Section with Parallax */}
      <motion.section 
        className="about-hero"
        style={heroStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transforming Lives,<br />Building Futures
          </motion.h1>
          <motion.div 
            className="hero-line"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
          <motion.div
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <h2>Who We Are</h2>
            <p>BLGM is a non-profit, non-governmental, and non-political organisation which creates an environment where underprivileged children can break the barrier of access to education regardless of their religious beliefs and communities can be better.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section 
        className="about-us-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-us-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            About Us
          </motion.h2>
          <motion.div 
            className="animated-border"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="animated-text"
          >
            {"Brighter Land Global Mission was established in 2015 and fully incorporated in 2024, dedicated to supporting education, community development, food security, and livelihood (skills development) for underprivileged, marginalised groups and conflict-affected communities in Nigeria. Our mandate is to creating an enabling environment where children and women have equal access to education, food, portable water, skills and a good facility which encourages modern teaching for underprivileged, marginalised groups and conflict-affected communities."
              .split(' ')
              .map((word, index) => (
                <span key={index} style={{ '--delay': `${index * 0.2}s` }}>{word} </span>
              ))}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="animated-text"
          >
            {"Dedicated individuals from within Nigeria and abroad have generously supported our organisations with resources and encouragement. We currently have educational sponsorship programmes with more than 50 beneficiaries, and we have supported and improved several communities by providing portable drinking water and mobile schools to facilitate learning. We advocate our core values using different platforms, supporting and creating projects that address educational and socio-economic challenges."
              .split(' ')
              .map((word, index) => (
                <span key={index} style={{ '--delay': `${index * 0.2}s` }}>{word} </span>
              ))}
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Vision Values Section */}
      <section className="mvv-container">
        <motion.div 
          className="mvv-card mission-card"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mvv-content">
            <h2>Our Mission</h2>
            <div className="animated-border"></div>
            <p>Our organization is dedicated to support and empower marginalised, underprivileged groups and conflict-affected communities through the provision of equitable education, skills training, livelihood opportunities, and a holistic approach in fostering community development and recovery founded in respect for diverse religious beliefs.</p>
          </div>
          <div className="mvv-image mission-image" style={missionImageStyle}>
            <div className="overlay-pattern"></div>
          </div>
        </motion.div>

        <motion.div 
          className="mvv-card vision-card"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mvv-image vision-image" style={visionImageStyle}>
            <div className="overlay-pattern"></div>
          </div>
          <div className="mvv-content">
            <h2>Our Vision</h2>
            <div className="animated-border"></div>
            <p>To create better communities where underprivileged children and marginalized groups, regardless of their religious beliefs, have equal access to quality education, empowering skills, and sustainable livelihoods. Building inclusive and resilient communities that are stabilized through equitable development and recovery from conflict.</p>
          </div>
        </motion.div>

        <motion.div 
          className="values-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h2 className="values-title">Our Core Values</h2>
          <div className="values-container">
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Compassion</h3>
              <p>Serving with empathy and understanding</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <i className="fas fa-hands-helping"></i>
              </div>
              <h3>Empowerment</h3>
              <p>Building capacity for sustainable change</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3>Equity</h3>
              <p>Ensuring fair access and opportunities</p>
            </motion.div>
            <motion.div className="value-item" variants={fadeInUp}>
              <div className="value-icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Sustainability</h3>
              <p>Creating lasting positive impact</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Who We Work With Section */}
      <motion.section 
        className="who-we-work-with-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="who-we-work-with-content">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Who We Work With
          </motion.h2>
          <motion.div 
            className="animated-border"
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          />
          <div className="partnership-grid">
            <motion.div 
              className="partnership-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="partnership-icon">
                <i className="fas fa-users"></i>
              </div>
              <p>We work together with community leaders, civil societies, and parents to advocate for quality education, including informal education, and increase children enrolment.</p>
            </motion.div>

            <motion.div 
              className="partnership-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <div className="partnership-icon">
                <i className="fas fa-tint"></i>
              </div>
              <p>Address the challenge of portable drinking water in hard to reach and conflict-affected communities by collaborating with the stakeholders and dedicated individuals as well as government.</p>
            </motion.div>

            <motion.div 
              className="partnership-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <div className="partnership-icon">
                <i className="fas fa-school"></i>
              </div>
              <p>Construction of mobile schools through the support of committed individuals and community stakeholders.</p>
            </motion.div>

            <motion.div 
              className="partnership-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <div className="partnership-icon">
                <i className="fas fa-utensils"></i>
              </div>
              <p>Improve food access to most vulnerable households through the collaborative efforts of dedicated individuals, community leaders, and other stakeholders.</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* History Section */}
      <motion.section 
        className="history-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>Our Journey</motion.h2>
        <div className="history-timeline">
          <motion.div 
            className="timeline-item"
            variants={fadeInUp}
          >
            <div className="timeline-content">
              <div className="timeline-year">2010</div>
              <h3>The Beginning</h3>
              <p>Founded with a vision to support orphaned children's education</p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            variants={fadeInUp}
          >
            <div className="timeline-content">
              <div className="timeline-year">2015</div>
              <h3>Expanding Horizons</h3>
              <p>Expanded to include healthcare initiatives and professional training programs</p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            variants={fadeInUp}
          >
            <div className="timeline-content">
              <div className="timeline-year">2020</div>
              <h3>Major Milestone</h3>
              <p>Reached milestone of 1,000+ children sponsored and 1,000 professionals trained</p>
            </div>
          </motion.div>
          <motion.div 
            className="timeline-item"
            variants={fadeInUp}
          >
            <div className="timeline-content">
              <div className="timeline-year">Present</div>
              <h3>Global Impact</h3>
              <p>Continuing to expand our impact across multiple countries and communities</p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <OurImpact />

      {/* Leadership Team Section */}
      <motion.section 
        className="leadership-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 className="leadership-title" variants={fadeInUp}>Our Leadership Team</motion.h2>
        <div className="team grid">
          {teamMembers.map((member, index) => (
            <motion.div 
              className="items shadow" 
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
            >
              <div className="img">
                <img src={member.image} alt={member.name} />
                <div className="overlay">
                  {member.socials.map((social, i) => (
                    <motion.a 
                      href={social.url} 
                      key={i} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <i className={`${social.icon} icon`}></i>
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="details">
                <h2>{member.name}</h2>
                <p style={{ color: '#1976d2', fontWeight: 600 }}>{member.role}</p>
                <p style={{ color: '#555', fontSize: '1.05rem', lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Join Our Mission</h2>
        <p>Be part of our journey to create lasting impact in communities worldwide</p>
        <div className="cta-buttons">
          <motion.button 
            className="primary-btn"
            onClick={() => history.push('/donate')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Donate Now
          </motion.button>
          <motion.button 
            className="secondary-btn"
            onClick={() => history.push('/contact')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 