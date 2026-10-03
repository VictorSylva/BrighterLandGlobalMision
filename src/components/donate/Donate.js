import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DONATION_OPTIONS, BANK_DETAILS, ORG_DETAILS } from '../../data/blgmData';
import './Donate.css';

const Donate = () => {
  const history = useHistory();
  const [currency, setCurrency] = useState('NGN'); // 'NGN' | 'USD'
  const [frequency, setFrequency] = useState('monthly'); // 'monthly' | 'one-time'
  const [selectedTier, setSelectedTier] = useState(DONATION_OPTIONS[0].id);
  const [copiedAccount, setCopiedAccount] = useState(''); // 'dollar' | 'naira' | ''
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('bank'); // 'bank' | 'card'

  const handleCopyAccount = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedAccount(type);
    setTimeout(() => setCopiedAccount(''), 3000);
  };

  const handleSimulateDonation = (e) => {
    e.preventDefault();
    setShowThankYouModal(true);
  };

  return (
    <div className="blgm-donate-page">
      {/* Page Hero */}
      <section className="blgm-page-hero">
        <div className="blgm-page-hero-bg">
          <img src="/images/gallery/bag2.jpg" alt="BLGM Students Receiving Donated School Bags" className="blgm-page-hero-img" />
          <div className="blgm-page-hero-overlay"></div>
        </div>

        <div className="blgm-container blgm-page-hero-content">
          <div className="blgm-eyebrow blgm-eyebrow-dark">
            <i className="fa-solid fa-hand-holding-heart"></i>
            <span>Transform a Life Today</span>
          </div>
          <h1 className="blgm-heading-display" style={{ color: '#FFFFFF', maxWidth: 840 }}>
            Your Generosity Sends a Child to School and Brings Water to a Village.
          </h1>
          <p className="blgm-lead" style={{ color: '#E2E8F0', maxWidth: 740 }}>
            100% of your dedicated project donation goes straight to field operations, school fees, books, and borehole maintenance in Nigeria.
          </p>
        </div>
      </section>

      {/* Main Donation Conversion Arena */}
      <section className="blgm-section">
        <div className="blgm-container">
          <div className="blgm-donate-layout">
            {/* Left Column: Giving Configuration */}
            <div className="blgm-donate-form-col">
              <div className="blgm-card blgm-donate-card">
                {/* Currency & Frequency Controls */}
                <div className="blgm-donate-controls-bar">
                  <div className="blgm-toggle-group">
                    <button 
                      type="button"
                      className={`blgm-toggle-btn ${frequency === 'monthly' ? 'active' : ''}`}
                      onClick={() => setFrequency('monthly')}
                    >
                      <i className="fa-solid fa-arrows-rotate"></i>
                      <span>Monthly Partnership</span>
                    </button>
                    <button 
                      type="button"
                      className={`blgm-toggle-btn ${frequency === 'one-time' ? 'active' : ''}`}
                      onClick={() => setFrequency('one-time')}
                    >
                      <span>One-Time Gift</span>
                    </button>
                  </div>

                  <div className="blgm-currency-selector">
                    <span className="blgm-currency-label">Currency:</span>
                    <button 
                      type="button"
                      className={`blgm-curr-btn ${currency === 'NGN' ? 'active' : ''}`}
                      onClick={() => setCurrency('NGN')}
                    >
                      NGN (₦)
                    </button>
                    <button 
                      type="button"
                      className={`blgm-curr-btn ${currency === 'USD' ? 'active' : ''}`}
                      onClick={() => setCurrency('USD')}
                    >
                      USD ($)
                    </button>
                  </div>
                </div>

                {/* Donation Option Tiers */}
                <div className="blgm-tiers-container">
                  <h3 className="blgm-tiers-heading">Select an Impact Tier:</h3>
                  <div className="blgm-tiers-grid">
                    {DONATION_OPTIONS.map((tier) => {
                      const isSelected = selectedTier === tier.id;
                      const amountDisplay = currency === 'NGN' ? tier.amountNGN : tier.amountUSD;
                      return (
                        <div 
                          key={tier.id}
                          className={`blgm-tier-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => {
                            setSelectedTier(tier.id);
                          }}
                        >
                          <div className="blgm-tier-radio">
                            <i className={isSelected ? "fa-solid fa-circle-dot" : "fa-regular fa-circle"}></i>
                          </div>
                          <div className="blgm-tier-info">
                            <div className="blgm-tier-amount-row">
                              <span className="blgm-tier-amount">{amountDisplay}</span>
                              <span className="blgm-tier-freq">
                                {frequency === 'monthly' ? '/ month' : 'single gift'}
                              </span>
                            </div>
                            <h4 className="blgm-tier-title">{tier.title}</h4>
                            <p className="blgm-tier-desc">{tier.description}</p>
                            <ul className="blgm-tier-outputs">
                              {tier.tangibleOutputs.slice(0, 2).map((out, i) => (
                                <li key={i}>
                                  <i className="fa-solid fa-check"></i>
                                  <span>{out}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Payment Method Selector */}
                <div className="blgm-payment-method-section">
                  <h3 className="blgm-tiers-heading">Choose Giving Method:</h3>
                  <div className="blgm-methods-grid">
                    <div 
                      className={`blgm-method-choice ${paymentMethod === 'bank' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('bank')}
                    >
                      <i className="fa-solid fa-building-columns"></i>
                      <div>
                        <strong>Direct Bank Transfer</strong>
                        <p>Zero processing fees; 100% arrives in Nigeria</p>
                      </div>
                    </div>

                    <div 
                      className={`blgm-method-choice ${paymentMethod === 'card' ? 'active' : ''}`}
                      onClick={() => setPaymentMethod('card')}
                    >
                      <i className="fa-solid fa-credit-card"></i>
                      <div>
                        <strong>Online Card / Gateway</strong>
                        <p>Visa, MasterCard, Verve, or International Card</p>
                      </div>
                    </div>
                  </div>

                  {paymentMethod === 'bank' ? (
                    <div className="blgm-bank-details-box">
                      <div className="blgm-bank-details-header">
                        <div>
                          <h4>Official Bank Accounts</h4>
                          <p>Direct Wire / NUBAN Transfer (First Bank of Nigeria)</p>
                        </div>
                        <span className="blgm-content-flag">
                          <i className="fa-solid fa-building-columns"></i>
                          <span>Official NGO Accounts</span>
                        </span>
                      </div>

                      <div className="blgm-bank-accounts-grid">
                        {/* Dollar Account Card */}
                        <div className={`blgm-bank-account-card ${currency === 'USD' ? 'is-preferred' : ''}`}>
                          <h4 className="blgm-bank-card-title dollar">Dollar Account</h4>
                          <div className="blgm-bank-details-list">
                            <div className="blgm-bank-detail-item">
                              <span className="blgm-bank-detail-label">Account Name:</span>
                              <span className="blgm-bank-detail-val">{BANK_DETAILS.dollarAccount.accountName}</span>
                            </div>
                            <div className="blgm-bank-detail-item">
                              <span className="blgm-bank-detail-label">Bank:</span>
                              <span className="blgm-bank-detail-val">{BANK_DETAILS.dollarAccount.bank}</span>
                            </div>
                            <div className="blgm-bank-number-box">
                              <div className="blgm-bank-number-meta">
                                <span className="blgm-bank-detail-label">Account Number:</span>
                                <span className="blgm-acc-digits">{BANK_DETAILS.dollarAccount.accountNumber}</span>
                              </div>
                              <button 
                                type="button" 
                                className="blgm-btn blgm-btn-outline blgm-btn-sm"
                                onClick={() => handleCopyAccount(BANK_DETAILS.dollarAccount.accountNumber, 'dollar')}
                                aria-label="Copy Dollar Account Number"
                              >
                                <i className={copiedAccount === 'dollar' ? "fa-solid fa-check" : "fa-solid fa-copy"}></i>
                                <span>{copiedAccount === 'dollar' ? 'Copied!' : 'Copy'}</span>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Naira Account Card */}
                        <div className={`blgm-bank-account-card ${currency === 'NGN' ? 'is-preferred' : ''}`}>
                          <h4 className="blgm-bank-card-title naira">Naira Account</h4>
                          <div className="blgm-bank-details-list">
                            <div className="blgm-bank-detail-item">
                              <span className="blgm-bank-detail-label">Account Name:</span>
                              <span className="blgm-bank-detail-val">{BANK_DETAILS.nairaAccount.accountName}</span>
                            </div>
                            <div className="blgm-bank-detail-item">
                              <span className="blgm-bank-detail-label">Bank:</span>
                              <span className="blgm-bank-detail-val">{BANK_DETAILS.nairaAccount.bank}</span>
                            </div>
                            <div className="blgm-bank-number-box">
                              <div className="blgm-bank-number-meta">
                                <span className="blgm-bank-detail-label">Account Number:</span>
                                <span className="blgm-acc-digits">{BANK_DETAILS.nairaAccount.accountNumber}</span>
                              </div>
                              <button 
                                type="button" 
                                className="blgm-btn blgm-btn-outline blgm-btn-sm"
                                onClick={() => handleCopyAccount(BANK_DETAILS.nairaAccount.accountNumber, 'naira')}
                                aria-label="Copy Naira Account Number"
                              >
                                <i className={copiedAccount === 'naira' ? "fa-solid fa-check" : "fa-solid fa-copy"}></i>
                                <span>{copiedAccount === 'naira' ? 'Copied!' : 'Copy'}</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="blgm-bank-note">
                        <i className="fa-solid fa-circle-info"></i> {BANK_DETAILS.note}
                      </p>

                      <div className="blgm-bank-confirm-action">
                        <button 
                          type="button" 
                          className="blgm-btn blgm-btn-accent"
                          onClick={handleSimulateDonation}
                          style={{ width: '100%' }}
                        >
                          <i className="fa-solid fa-receipt"></i>
                          <span>I Have Sent / Will Send My Transfer</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form className="blgm-card-giving-form" onSubmit={handleSimulateDonation}>
                      <div className="blgm-form-group">
                        <label>Your Full Name *</label>
                        <input type="text" required placeholder="Rev. / Dr. / Mr. / Mrs. Name" />
                      </div>
                      <div className="blgm-form-group">
                        <label>Email Address for Tax Receipt & Updates *</label>
                        <input type="email" required placeholder="your.email@example.com" />
                      </div>
                      <div className="blgm-form-group">
                        <label>Target Designation</label>
                        <select defaultValue="education">
                          <option value="education">Education Sponsorship & Mobile Schools</option>
                          <option value="water">Potable Clean Water Borehole Fund</option>
                          <option value="mission">Mission & Leadership Training</option>
                          <option value="general">Where Most Needed (General Fund)</option>
                        </select>
                      </div>

                      <div className="blgm-secure-badge">
                        <i className="fa-solid fa-lock"></i>
                        <span>256-bit Bank Grade Encrypted Payment Gateway</span>
                      </div>

                      <button 
                        type="submit"
                        className="blgm-btn blgm-btn-accent blgm-btn-lg"
                        style={{ width: '100%' }}
                      >
                        <i className="fa-solid fa-heart"></i>
                        <span>Proceed to Secure Checkout</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Why Give & Trust Signals */}
            <div className="blgm-donate-sidebar-col">
              <div className="blgm-card blgm-stewardship-card">
                <div className="blgm-stewardship-header">
                  <i className="fa-solid fa-award"></i>
                  <div>
                    <h4>Our Stewardship Pledge</h4>
                    <p>Every naira and dollar is held as a sacred trust.</p>
                  </div>
                </div>

                <ul className="blgm-pledge-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <div>
                      <strong>Direct Field Allocation:</strong>
                      <p>Your contribution directly funds tuition, learning packs, or water hardware.</p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <div>
                      <strong>Full Proof of Impact:</strong>
                      <p>Receive termly photographic and progress updates on sponsored children and projects.</p>
                    </div>
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                    <div>
                      <strong>Strict Child Protection:</strong>
                      <p>All sponsorship communications comply with international child safeguarding protocols.</p>
                    </div>
                  </li>
                </ul>

                <div className="blgm-direct-inquiry-box">
                  <h5>Institutional Donor or Corporate CSR?</h5>
                  <p>For grant agreements, wire routing, or dedicated project partnerships, contact our office directly.</p>
                  <button 
                    onClick={() => history.push('/contact')}
                    className="blgm-btn blgm-btn-outline blgm-btn-sm"
                    style={{ width: '100%' }}
                  >
                    Contact Executive Director
                  </button>
                </div>
              </div>

              {/* Quick Field Fact */}
              <div className="blgm-card blgm-quick-fact-card">
                <div className="blgm-quick-fact-stat">67+</div>
                <p>Orphans and vulnerable children currently attend classes because donors like you believed in their future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You / Confirmation Modal */}
      {showThankYouModal && (
        <div className="blgm-modal-backdrop" onClick={() => setShowThankYouModal(false)}>
          <div className="blgm-modal-card" onClick={e => e.stopPropagation()}>
            <div className="blgm-modal-icon">
              <i className="fa-solid fa-heart"></i>
            </div>
            <h2 className="blgm-heading-lg">Thank You for Standing with Nigeria’s Children!</h2>
            <p>
              Your compassion brings life-changing education and clean water to communities in urgent need.
            </p>
            <div className="blgm-modal-info">
              <p><strong>Official Direct Bank Accounts (First Bank):</strong></p>
              <div style={{ margin: '0.6rem 0', display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.92rem' }}>
                <p><strong>Dollar Account:</strong> {BANK_DETAILS.dollarAccount.accountNumber} ({BANK_DETAILS.dollarAccount.accountName})</p>
                <p><strong>Naira Account:</strong> {BANK_DETAILS.nairaAccount.accountNumber} ({BANK_DETAILS.nairaAccount.accountName})</p>
              </div>
              <p>Please use your full name as the transfer reference and send proof of payment or notification to <strong>{ORG_DETAILS.contactEmail}</strong>.</p>
            </div>
            <button 
              className="blgm-btn blgm-btn-primary"
              onClick={() => {
                setShowThankYouModal(false);
                history.push('/impact');
              }}
              style={{ width: '100%' }}
            >
              <span>Explore Our Field Stories</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;