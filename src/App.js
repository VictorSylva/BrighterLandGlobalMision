import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Core Navigation & Shell
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Page Views
import Home from './components/home/Home';
import About from './components/about/About';
import Programs from './components/programs/Programs';
import ProgramDetails from './components/programs/ProgramDetails';
import Impact from './components/impact/Impact';
import GetInvolved from './components/getInvolved/GetInvolved';
import Donate from './components/donate/Donate';
import Contact from './components/contact/Contact';

// Fluid animation variants for route transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 12
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        
        <main className="blgm-main-content">
          <AnimatePresence mode="wait">
            <Switch>
              <Route exact path="/">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Home />
                </motion.div>
              </Route>

              <Route exact path="/about">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <About />
                </motion.div>
              </Route>

              <Route exact path="/programs">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Programs />
                </motion.div>
              </Route>

              <Route path="/programs/:programId">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <ProgramDetails />
                </motion.div>
              </Route>

              <Route exact path="/impact">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Impact />
                </motion.div>
              </Route>

              <Route exact path="/get-involved">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <GetInvolved />
                </motion.div>
              </Route>

              <Route exact path="/donate">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Donate />
                </motion.div>
              </Route>

              <Route path="/donate/:donationType">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Donate />
                </motion.div>
              </Route>

              <Route exact path="/contact">
                <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                  <Contact />
                </motion.div>
              </Route>

              {/* Graceful Fallback */}
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
