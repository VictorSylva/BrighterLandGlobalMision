import React, { useState } from "react";
import { ORG_DETAILS } from "../../data/blgmData";
import { sendContactMessage } from "../../services/emailService";
import "./contact.css";

const Contact = () => {
  const mapUrl = 'https://maps.google.com/maps?q=Police+Staff+College,+Jos,+Plateau,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'general',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Please provide details in your message';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await sendContactMessage(formData);
      setIsSubmitted(true);
    } catch (err) {
      console.error("[Contact Form Submit Error]:", err);
      if (err.code === "EMAILJS_NOT_CONFIGURED" || err.message === "EMAILJS_NOT_CONFIGURED") {
        setSubmitError(
          "EmailJS credentials are being configured. You can also send directly using the 'Open in Email Client' link below."
        );
      } else {
        setSubmitError(
          "Unable to deliver message right now. Please check your network or send directly via email."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoLink = `mailto:${ORG_DETAILS.contactEmail}?subject=${encodeURIComponent(`[BLGM Inquiry - ${formData.inquiryType.toUpperCase()}] ${formData.subject}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`)}`;

  return (
    <div className="blgm-contact-page">
      {/* Page Hero */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img src="/images/mission-hero.jpg" alt="BLGM Headquarters and Contact" className="blgm-page-hero-img" />
          <div className="blgm-page-hero-overlay"></div>
        </div>

        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-eyebrow blgm-eyebrow-dark">
            <i className="fa-solid fa-envelope"></i>
            <span>Get in Touch</span>
          </div>
          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF' }}>
            We Welcome Your Partnership, Questions, and Inquiries.
          </h1>
          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 720 }}>
            Reach out to our leadership team for project updates, donation inquiries, church partnerships, or field coordination in Nigeria.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-contact-main-grid">
            {/* Form Column */}
            <div className="blgm-card blgm-contact-form-card">
              <div className="blgm-contact-form-header">
                <h2 className="blgm-heading-lg">Send Us a Direct Message</h2>
                <p>We typically respond to all inquiries within 24–48 hours.</p>
              </div>

              {isSubmitted ? (
                <div className="blgm-contact-success-state">
                  <div className="blgm-success-circle">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <h3>Thank You, {formData.name}!</h3>
                  <p>
                    Your message regarding <strong>"{formData.subject}"</strong> has been recorded. Our coordination team in Jos, Plateau State will review your note and respond promptly.
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    Need immediate confirmation? You can also send this message directly via your email client:
                  </p>
                  <a 
                    href={mailtoLink} 
                    className="blgm-btn blgm-btn-outline blgm-btn-sm"
                    style={{ marginTop: '0.75rem' }}
                  >
                    <i className="fa-solid fa-paper-plane"></i>
                    <span>Open in Email App</span>
                  </a>
                  <button 
                    type="button"
                    className="blgm-btn blgm-btn-primary"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        inquiryType: 'general',
                        subject: '',
                        message: ''
                      });
                    }}
                    style={{ marginTop: '1.5rem' }}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="blgm-contact-form">
                  {submitError && (
                    <div className="blgm-contact-error-banner">
                      <i className="fa-solid fa-circle-exclamation"></i>
                      <div>
                        <strong>Notice:</strong>
                        <p>{submitError}</p>
                      </div>
                    </div>
                  )}

                  <div className="blgm-form-row">
                    <div className="blgm-form-group">
                      <label htmlFor="name">Your Full Name *</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Elder Emmanuel Danjuma" 
                      />
                      {errors.name && <span className="blgm-error-text">{errors.name}</span>}
                    </div>

                    <div className="blgm-form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. emmanuel@example.com" 
                      />
                      {errors.email && <span className="blgm-error-text">{errors.email}</span>}
                    </div>
                  </div>

                  <div className="blgm-form-row">
                    <div className="blgm-form-group">
                      <label htmlFor="phone">Phone / WhatsApp (Optional)</label>
                      <input 
                        type="tel" 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+234 or Country Code" 
                      />
                    </div>

                    <div className="blgm-form-group">
                      <label htmlFor="inquiryType">Reason for Contact</label>
                      <select 
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                      >
                        <option value="general">General Inquiry</option>
                        <option value="education">Orphan Education Sponsorship</option>
                        <option value="water">Potable Water / Borehole Project</option>
                        <option value="partnership">Church / Corporate CSR Partnership</option>
                        <option value="volunteer">Volunteering Skills / Teaching</option>
                        <option value="grant">Grantmaking & Institutional Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="blgm-form-group">
                    <label htmlFor="subject">Subject *</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Sponsoring a mobile school in Plateau State" 
                    />
                    {errors.subject && <span className="blgm-error-text">{errors.subject}</span>}
                  </div>

                  <div className="blgm-form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details of your inquiry or how you would like to support..."
                    ></textarea>
                    {errors.message && <span className="blgm-error-text">{errors.message}</span>}
                  </div>

                  <div className="blgm-contact-submit-bar">
                    <button 
                      type="submit" 
                      className="blgm-btn blgm-btn-accent blgm-btn-lg"
                      disabled={isSubmitting}
                      style={{ opacity: isSubmitting ? 0.8 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fa-solid fa-spinner fa-spin"></i>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-paper-plane"></i>
                          <span>Send Direct Message</span>
                        </>
                      )}
                    </button>
                    <a href={mailtoLink} className="blgm-mailto-fallback">
                      or send via your email client →
                    </a>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar Info & Map Column */}
            <div className="blgm-contact-info-col">
              <div className="blgm-card blgm-office-info-card">
                <h3>Field Headquarters</h3>
                <ul className="blgm-office-contact-list">
                  <li>
                    <i className="fa-solid fa-location-dot"></i>
                    <div>
                      <strong>Operating Location</strong>
                      <p>{ORG_DETAILS.headquarters}</p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone"></i>
                    <div>
                      <strong>Official Phone Line</strong>
                      <p><a href={`tel:${ORG_DETAILS.phoneRaw}`}>{ORG_DETAILS.contactPhone}</a></p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope"></i>
                    <div>
                      <strong>Official Email</strong>
                      <p><a href={`mailto:${ORG_DETAILS.contactEmail}`}>{ORG_DETAILS.contactEmail}</a></p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-user-tie"></i>
                    <div>
                      <strong>Executive Direction</strong>
                      <p>Rev. Fidelis Gambo, Founder & Director</p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-certificate"></i>
                    <div>
                      <strong>Corporate Status</strong>
                      <p>Incorporated under CAC Nigeria (2024)</p>
                    </div>
                  </li>
                </ul>

                <div className="blgm-contact-social-strip">
                  <h4>Connect on Social Media:</h4>
                  <div className="blgm-social-icons-row">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
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

              {/* Map Card */}
              <div className="blgm-card blgm-map-card">
                <iframe 
                  src={mapUrl} 
                  title="Brighter Land Global Mission Location Map"
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="blgm-map-frame"
                ></iframe>
                <div className="blgm-map-caption">
                  <i className="fa-solid fa-location-crosshairs"></i>
                  <span>Opposite Police Staff College, Jos 930101, Plateau, Nigeria</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
