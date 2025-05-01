import React from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Programs.css';

// Animation variants
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

const Programs = () => {
  const history = useHistory();
  
  const programs = [
    {
      title: "Education Sponsorship Program",
      description: "Over 67 Orphans have received scholarships into our school, and over 9 Mobile Schools have been established.",
      details: [
        "Building mobile schools",
        "Provision of school materials(Backpacks and books)",
        "Providing educational support through sponsorship",
        "Career guidance"
      ]
    },
    {
      title: "Community Development Program",
      description: "More than 6 boreholes have been drilled, and over 3000 people have been reached with clean water and food in over 10 communities.",
      details: [
        "Food security",
        "Livelihood/skill training center",
        "Driling of boreholes to provide clean water",
      ]
    },
    {
      title: "Mission and Evangelism Program",
      description: "Over 100 leaders trained, now serving in 20+ communities to inspire positive change.",
      details: [
        "Leadership training",
        "Church planting",
        "Bible donation. tag: Bringing them young",
      ]
    }
  ];

  const handleLearnMore = (programTitle) => {
    // Map full program titles to their URL-friendly versions
    const urlMap = {
      "Education Sponsorship Program": "education-sponsorship",
      "Community Development Program": "community-development",
      "Mission and Evangelism Program": "mission-and-evangelism"
    };
    const urlPath = urlMap[programTitle] || programTitle.toLowerCase().replace(/\s+/g, '-');
    history.push(`/programs/${urlPath}`);
  };

  return (
    <div className="programs-container">
      <motion.div 
        className="programs-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Our Programs</h1>
        <p>Creating Lasting Impact Through Education and Community Development</p>
      </motion.div>

      <motion.div 
        className="programs-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        {programs.map((program, index) => (
          <motion.div 
            className="program-card" 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.2 } }}
          >
            <h2>{program.title}</h2>
            <p className="program-description">{program.description}</p>
            <motion.ul 
              className="program-details"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              {program.details.map((detail, i) => (
                <motion.li 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { 
                      opacity: 1, 
                      x: 0,
                      transition: { delay: i * 0.1 }
                    }
                  }}
                >
                  {detail}
                </motion.li>
              ))}
            </motion.ul>
            <motion.button 
              className="learn-more-btn"
              onClick={() => handleLearnMore(program.title)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Programs; 