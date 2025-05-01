import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Brighter Land Global Mission
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={toggleMenu}>
              Home {location.pathname === '/' && <i className="fas fa-check-circle" style={{ marginLeft: '5px' }}></i>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={toggleMenu}>
              About Us {location.pathname === '/about' && <i className="fas fa-check-circle" style={{ marginLeft: '5px' }}></i>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`} onClick={toggleMenu}>
              Programs {location.pathname === '/programs' && <i className="fas fa-check-circle" style={{ marginLeft: '5px' }}></i>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/impact" className={`nav-link ${location.pathname === '/impact' ? 'active' : ''}`} onClick={toggleMenu}>
              Impact {location.pathname === '/impact' && <i className="fas fa-check-circle" style={{ marginLeft: '5px' }}></i>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={toggleMenu}>
              Contact {location.pathname === '/contact' && <i className="fas fa-check-circle" style={{ marginLeft: '5px' }}></i>}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/donate" className={`nav-link donate-btn ${location.pathname === '/donate' ? 'active' : ''}`} onClick={toggleMenu}>
              Donate {location.pathname === '/donate' && <i className="fas fa-check-circle" style={{ marginLeft: '5px' }}></i>}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 