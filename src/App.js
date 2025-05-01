import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import Components
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Programs from './components/programs/Programs';
import Donate from './components/donate/Donate';
import Impact from './components/impact/Impact';
import ProgramDetails from './components/programs/ProgramDetails';
import ImpactReport from './components/impact/ImpactReport';
import ScrollToTop from './components/common/ScrollToTop';

// Animation variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <Navbar />
        </motion.div>
        <AnimatePresence mode="wait">
          <Switch>
            <Route exact path="/">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Home />
              </motion.div>
            </Route>
            <Route exact path="/about">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <About />
              </motion.div>
            </Route>
            <Route exact path="/programs">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Programs />
              </motion.div>
            </Route>
            <Route path="/programs/:programId">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ProgramDetails />
              </motion.div>
            </Route>
            <Route path="/impact">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Impact />
              </motion.div>
            </Route>
            <Route path="/impact/report">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <ImpactReport />
              </motion.div>
            </Route>
            <Route exact path="/contact">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Contact />
              </motion.div>
            </Route>
            <Route exact path="/donate">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Donate />
              </motion.div>
            </Route>
            <Route path="/donate/:donationType">
              <motion.div
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <Donate />
              </motion.div>
            </Route>
          </Switch>
        </AnimatePresence>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
