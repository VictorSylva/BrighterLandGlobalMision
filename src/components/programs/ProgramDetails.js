import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProgramDetails.css';

const ProgramDetails = () => {
  const { programId } = useParams();
  const history = useHistory();

  // Animation variants
  const fadeIn = {
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

  // This would typically come from an API or database
  const programDetails = {
    'education-sponsorship': {
      title: 'Education Sponsorship Program',
      description: 'Over 67 Orphans have received scholarships into our school, and over 9 Mobile Schools have been established.',
      details: [
        'Building mobile schools',
        'Provision of school materials (Backpacks and books)',
        'Providing educational support through sponsorship',
        'Career guidance'
      ],
      impact: 'Over 67 students sponsored and 9 Mobile Schools established',
      requirements: 'Open to all Orphans and Missionary children in need of educational support',
      process: ['Application', 'Assessment', 'Sponsorship', 'Regular Progress Updates']
    },
    'community-development': {
      title: 'Community Development Program',
      description: 'More than 6 boreholes have been drilled, and over 3000 people have been reached with clean water and food in over 10 communities.',
      details: [
        'Food security initiatives',
        'Livelihood/skill training center',
        'Drilling of boreholes to provide clean water',
        'Community empowerment programs'
      ],
      impact: 'Over 3000 people reached with clean water and food in 10+ communities',
      requirements: 'Communities in need of development support',
      process: ['Community Assessment', 'Planning', 'Implementation', 'Monitoring']
    },
    'mission-and-evangelism': {
      title: 'Mission and Evangelism Program',
      description: 'Over 100 leaders trained, now serving in 20+ communities to inspire positive change.',
      details: [
        'Leadership training',
        'Church planting',
        'Bible donation and distribution',
        'Community outreach programs'
      ],
      impact: 'Over 100 leaders trained serving in 20+ communities',
      requirements: 'Passionate individuals committed to community service',
      process: ['Selection', 'Training', 'Deployment', 'Ongoing Support']
    }
  };

  const program = programDetails[programId];

  if (!program) {
    return (
      <div className="program-details-container">
        <h1>Program Not Found</h1>
        <button onClick={() => history.push('/programs')}>Back to Programs</button>
      </div>
    );
  }

  return (
    <motion.div 
      className="program-details-container"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.button 
        className="back-button"
        onClick={() => history.push('/programs')}
        whileHover={{ x: -5 }}
      >
        ← Back to Programs
      </motion.button>
      
      <motion.div className="program-header" variants={fadeIn}>
        <h1>{program.title}</h1>
        <p className="description">{program.description}</p>
      </motion.div>
      
      <motion.div 
        className="program-grid"
        variants={staggerContainer}
      >
        <motion.div className="program-section details-section" variants={fadeIn}>
          <h2>Program Details</h2>
          <ul>
            {program.details.map((detail, index) => (
              <motion.li 
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                {detail}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="program-section impact-section" variants={fadeIn}>
          <h2>Impact</h2>
          <p>{program.impact}</p>
        </motion.div>

        <motion.div className="program-section requirements-section" variants={fadeIn}>
          <h2>Requirements</h2>
          <p>{program.requirements}</p>
        </motion.div>

        <motion.div className="program-section process-section" variants={fadeIn}>
          <h2>Process</h2>
          <div className="process-steps">
            {program.process.map((step, index) => (
              <motion.span 
                key={index} 
                className="process-step"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }
                }}
              >
                {step}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.button 
        className="get-involved-btn"
        onClick={() => history.push('/contact')}
        whileHover={{ y: -3 }}
        whileTap={{ y: 0 }}
      >
        Get Involved
      </motion.button>
    </motion.div>
  );
};

export default ProgramDetails; 