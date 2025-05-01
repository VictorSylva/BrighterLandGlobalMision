import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css';

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

const Home = () => {
  const history = useHistory();

  return (
    <div className="home-container">
      {/* Hero Section */}
      <motion.section
        className="hero-section"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/orphans-in-school.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1>Transforming Lives Through Education and Community Development</h1>
          <p>Join us in our mission to sponsor orphans, train professionals, and create lasting impact in communities worldwide.</p>
          <div className="hero-buttons">
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
              onClick={() => history.push('/about')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </motion.section>

      {/* Mission Vision Values Section */}
      <motion.section 
        className="home-mvv-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div 
          className="home-mvv-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <div className="home-mvv-icon">
            <i className="fas fa-bullseye"></i>
          </div>
          <h2>Our Mission</h2>
          <p>Our organization is dedicated to support and empower marginalised, underprivileged groups and conflict-affected communities through the provision of equitable education, skills training, livelihood opportunities, and a holistic approach in fostering community development and recovery founded in respect for diverse religious beliefs.</p>
          <motion.button 
            className="home-mvv-btn"
            onClick={() => history.push('/about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div 
          className="home-mvv-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <div className="home-mvv-icon">
            <i className="fas fa-eye"></i>
          </div>
          <h2>Our Vision</h2>
          <p>To create better communities where underprivileged children and marginalized groups, regardless of their religious beliefs, have equal access to quality education, empowering skills, and sustainable livelihoods. Building inclusive and resilient communities that are stabilized through equitable development and recovery from conflict.</p>
          <motion.button 
            className="home-mvv-btn"
            onClick={() => history.push('/about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>

        <motion.div 
          className="home-mvv-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <div className="home-mvv-icon">
            <i className="fas fa-heart"></i>
          </div>
          <h2>Core Values</h2>
          <p>Integrity, Compassion, Excellence, Sustainability, and Faith-based service in all our endeavors to create lasting impact.</p>
          <motion.button 
            className="home-mvv-btn"
            onClick={() => history.push('/about')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Programs Section */}
      <motion.section 
        className="programs-section"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="programs-title">
          <h2>Our Programs</h2>
          <p>
            Discover how we're making a difference through our key initiatives
          </p>
        </div>

        <div className="programs-grid">
          <motion.div 
            className="program-card"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/education.jpg" alt="Education Sponsorship" className="program-img" />
            <div className="program-content">
              <h3>Education Sponsorship</h3>
              <p>Over 67 students have received scholarships, and over 9 Mobile Schools have been established.</p>
              <motion.button 
                className="impact-btn"
                onClick={() => history.push('/impact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More Impact
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="program-card"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/community.jpg" alt="Community Development" className="program-img" />
            <div className="program-content">
              <h3>Community Development</h3>
              <p>More than 6 boreholes have been drilled, and over 3000 people have been reached with clean water and food in over 10 communities.</p>
              <motion.button 
                className="impact-btn"
                onClick={() => history.push('/impact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More Impact
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="program-card"
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src="/images/mission.jpg" alt="Mission and Evangelism" className="program-img" />
            <div className="program-content">
              <h3>Mission and Evangelism</h3>
              <p>Over 100 leaders trained, now serving in 20+ communities to inspire positive change.</p>
              <motion.button 
                className="impact-btn"
                onClick={() => history.push('/impact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See More Impact
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section 
        className="cta-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <h2>Be Part of the Change</h2>
        <p>Your support can transform lives and create lasting impact in communities worldwide.</p>
        <motion.button 
          className="cta-btn"
          onClick={() => history.push('/contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Involved
        </motion.button>
      </motion.section>

      {/* Latest Updates */}
      <motion.section 
        className="latest-updates"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.h2 variants={fadeInUp}>Latest Updates</motion.h2>
        <div className="updates-grid">
          <motion.div 
            className="update-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <h3>New Education Center Opened</h3>
            <p>Our new education center in rural Kenya is now serving 200 children.</p>
            <motion.a 
              href="#" 
              className="read-more"
              whileHover={{ x: 5 }}
            >
              Read More
            </motion.a>
          </motion.div>
          <motion.div 
            className="update-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <h3>Medical Training Program Success</h3>
            <p>100 new doctors graduated from our medical training program.</p>
            <motion.a 
              href="#" 
              className="read-more"
              whileHover={{ x: 5 }}
            >
              Read More
            </motion.a>
          </motion.div>
          <motion.div 
            className="update-card"
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <h3>Legal Advocacy Milestone</h3>
            <p>Our trained lawyers successfully advocated for children's rights in 50 cases.</p>
            <motion.a 
              href="#" 
              className="read-more"
              whileHover={{ x: 5 }}
            >
              Read More
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Gallery Section */}
      <motion.section 
        className="gallery-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Gallery</h2>
        <div className="gallery-container">
        <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={3}
  slidesToScroll={1}
  autoplay={true}
  autoplaySpeed={3000}
  responsive={[
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]}
>
  <div className="gallery-item">
    <img src="/images/gallery/i1.jpg" alt="Gallery Image 1" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i2.jpg" alt="Gallery Image 2" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i3.jpg" alt="Gallery Image 3" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i4.jpg" alt="Gallery Image 4" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i5.jpg" alt="Gallery Image 5" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i6.jpg" alt="Gallery Image 6" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i7.jpg" alt="Gallery Image 7" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i8.jpg" alt="Gallery Image 8" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i9.jpg" alt="Gallery Image 9" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i10.jpg" alt="Gallery Image 10" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i11.jpg" alt="Gallery Image 11" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i12.jpg" alt="Gallery Image 12" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i13.jpg" alt="Gallery Image 13" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i14.jpg" alt="Gallery Image 14" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i15.jpg" alt="Gallery Image 15" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i16.jpg" alt="Gallery Image 16" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i17.jpg" alt="Gallery Image 17" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i18.jpg" alt="Gallery Image 18" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i19.jpg" alt="Gallery Image 19" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i20.jpg" alt="Gallery Image 20" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i21.jpg" alt="Gallery Image 21" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i22.jpg" alt="Gallery Image 22" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i23.jpg" alt="Gallery Image 23" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i24.jpg" alt="Gallery Image 24" />
  </div>
  <div className="gallery-item">
    <img src="/images/gallery/i25.jpg" alt="Gallery Image 25" />
  </div>
</Slider>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 