import React from 'react';
import { Link } from 'react-router-dom';
import { ORG_DETAILS } from '../../data/blgmData';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="blgm-footer">
      <div className="blgm-footer-trust-banner">
        <div className="blgm-container blgm-footer-trust-grid">
          <div className="blgm-trust-item">
            <i className="fa-solid fa-shield-heart"></i>
            <div>
              <h4>Child Safeguarding</h4>
              <p>Zero-tolerance protection standards for all minors in our programs.</p>
            </div>
          </div>
          <div className="blgm-trust-item">
            <i className="fa-solid fa-file-invoice-dollar"></i>
            <div>
              <h4>Fiduciary Probity</h4>
              <p>100% accountable allocation dedicated to community projects.</p>
            </div>
          </div>
          <div className="blgm-trust-item">
            <i className="fa-solid fa-hands-holding-child"></i>
            <div>
              <h4>Faith in Action</h4>
              <p>Unconditional Christian love serving people of all backgrounds.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="blgm-container blgm-footer-main">
        <div className="blgm-footer-grid">
          {/* Column 1: Organization Summary */}
          <div className="blgm-footer-col blgm-footer-about">
            <div className="blgm-footer-logo">
              <div className="blgm-footer-brand">
                <h3>BRIGHTER LAND</h3>
                <span>GLOBAL MISSION</span>
              </div>
            </div>
            <p className="blgm-footer-desc">
              A registered non-profit, non-governmental Christian organization dedicated to breaking educational barriers for orphans, drilling clean water boreholes, and equipping resilient grassroots leaders across conflict-affected communities in Nigeria.
            </p>
            <div className="blgm-legal-badge">
              <i className="fa-solid fa-certificate"></i>
              <span>Incorporated under CAC Nigeria • Est. 2015</span>
            </div>
          </div>

          {/* Column 2: Key Programmes */}
          <div className="blgm-footer-col">
            <h4 className="blgm-footer-heading">Our Key Work</h4>
            <ul className="blgm-footer-links">
              <li>
                <Link to="/programs/education-sponsorship">
                  <i className="fa-solid fa-chevron-right"></i> Education & Mobile Schools
                </Link>
              </li>
              <li>
                <Link to="/programs/community-development">
                  <i className="fa-solid fa-chevron-right"></i> Clean Water & Boreholes
                </Link>
              </li>
              <li>
                <Link to="/programs/mission-and-evangelism">
                  <i className="fa-solid fa-chevron-right"></i> Mission & Leadership Training
                </Link>
              </li>
              <li>
                <Link to="/impact">
                  <i className="fa-solid fa-chevron-right"></i> Field Documentary Videos
                </Link>
              </li>
              <li>
                <Link to="/impact">
                  <i className="fa-solid fa-chevron-right"></i> Verified Impact Data
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pathways to Partner */}
          <div className="blgm-footer-col">
            <h4 className="blgm-footer-heading">Get Involved</h4>
            <ul className="blgm-footer-links">
              <li>
                <Link to="/donate">
                  <i className="fa-solid fa-chevron-right"></i> Sponsor an Orphan's Schooling
                </Link>
              </li>
              <li>
                <Link to="/donate">
                  <i className="fa-solid fa-chevron-right"></i> Co-Fund a Village Borehole
                </Link>
              </li>
              <li>
                <Link to="/get-involved">
                  <i className="fa-solid fa-chevron-right"></i> Church & Institutional Partnership
                </Link>
              </li>
              <li>
                <Link to="/get-involved">
                  <i className="fa-solid fa-chevron-right"></i> Volunteer Skills & Teaching
                </Link>
              </li>
              <li>
                <Link to="/get-involved">
                  <i className="fa-solid fa-chevron-right"></i> Pray with Us for Nigeria
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Field Head */}
          <div className="blgm-footer-col">
            <h4 className="blgm-footer-heading">Field Headquarters</h4>
            <ul className="blgm-footer-contact">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>{ORG_DETAILS.headquarters}</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <a href={`tel:${ORG_DETAILS.phoneRaw}`}>{ORG_DETAILS.contactPhone}</a>
              </li>
              <li>
                <i className="fa-solid fa-envelope"></i>
                <a href={`mailto:${ORG_DETAILS.contactEmail}`}>{ORG_DETAILS.contactEmail}</a>
              </li>
              <li>
                <i className="fa-solid fa-hands-praying"></i>
                <span>Founder: Rev. Fidelis Gambo</span>
              </li>
            </ul>

            <div className="blgm-footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="blgm-footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Brighter Land Global Mission (BLGM). All rights reserved.
          </p>
          <div className="blgm-footer-bottom-links">
            <Link to="/about">Governance & Accountability</Link>
            <span>•</span>
            <Link to="/about">Child Protection Policy</Link>
            <span>•</span>
            <Link to="/contact">Direct Field Inquiries</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;