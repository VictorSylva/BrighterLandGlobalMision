import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ORG_DETAILS } from '../../data/blgmData';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 24) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/programs', label: 'Our Work' },
    { path: '/impact', label: 'Impact & Stories' },
    { path: '/get-involved', label: 'Get Involved' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Banner for Urgent Trust & Mission Indicator */}
      <div className="blgm-topbar">
        <div className="blgm-container blgm-topbar-inner">
          <div className="blgm-topbar-left">
            <span><i className="fa-solid fa-location-dot"></i> Jos, Plateau State</span>
            <span className="blgm-topbar-sep">•</span>
            <a href="tel:+2348034367951" className="blgm-topbar-phone" style={{ color: 'inherit', textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
              <i className="fa-solid fa-phone"></i> +234 803 436 7951
            </a>
          </div>
          <div className="blgm-topbar-right">
            <span><i className="fa-solid fa-heart"></i> Supporting 67+ Scholars & 9+ Mobile Schools</span>
            <Link to="/donate" className="blgm-topbar-link">Support a Child →</Link>
          </div>
        </div>
      </div>

      <header className={`blgm-navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="blgm-container blgm-navbar-container">
          <Link to="/" className="blgm-brand" onClick={closeMenu}>
            <div className="blgm-brand-text">
              <span className="blgm-brand-title">BRIGHTER LAND</span>
              <span className="blgm-brand-sub">GLOBAL MISSION</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="blgm-nav-desktop">
            <ul className="blgm-nav-list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path || 
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <li key={link.path} className="blgm-nav-item">
                    <Link
                      to={link.path}
                      className={`blgm-nav-link ${isActive ? 'active' : ''}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Action CTAs */}
          <div className="blgm-nav-actions">
            <Link to="/donate" className="blgm-btn blgm-btn-accent blgm-btn-sm blgm-nav-donate">
              <i className="fa-solid fa-hand-holding-heart"></i>
              <span>Donate Now</span>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              className={`blgm-menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        <div className={`blgm-mobile-drawer ${isMenuOpen ? 'active' : ''}`}>
          <div className="blgm-mobile-drawer-content">
            <ul className="blgm-mobile-nav-list">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path ||
                  (link.path !== '/' && location.pathname.startsWith(link.path));
                return (
                  <li key={link.path} className="blgm-mobile-nav-item">
                    <Link
                      to={link.path}
                      className={`blgm-mobile-nav-link ${isActive ? 'active' : ''}`}
                      onClick={closeMenu}
                    >
                      {link.label}
                      <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="blgm-mobile-drawer-footer">
              <Link
                to="/donate"
                className="blgm-btn blgm-btn-accent blgm-mobile-donate-btn"
                onClick={closeMenu}
              >
                <i className="fa-solid fa-heart"></i>
                <span>Donate to BLGM</span>
              </Link>
              <div className="blgm-mobile-contact-info">
                <p><i className="fa-solid fa-phone"></i> <a href="tel:+2348034367951" style={{ color: 'inherit' }}>+234 803 436 7951</a></p>
                <p><i className="fa-solid fa-envelope"></i> <a href={`mailto:${ORG_DETAILS.contactEmail}`} style={{ color: 'inherit' }}>{ORG_DETAILS.contactEmail}</a></p>
                <p><i className="fa-solid fa-location-dot"></i> opposite Police Staff College, Jos 930101, Plateau, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;