import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjsConfig.js';

/**
 * Sends a contact inquiry message via EmailJS to fidelisgambo9@gmail.com
 * 
 * @param {Object} data - Form data
 * @param {string} data.name - Sender's full name
 * @param {string} data.email - Sender's email address
 * @param {string} data.phone - Sender's phone number (optional)
 * @param {string} data.inquiryType - Category / Reason for contact
 * @param {string} data.subject - Subject of the inquiry
 * @param {string} data.message - Body text of the message
 * @returns {Promise<{success: boolean, message?: string}>}
 */
export const sendContactMessage = async (data) => {
  const { serviceId, templateId, publicKey } = EMAILJS_CONFIG;

  // Template variables matching any standard EmailJS template variable names
  const templateParams = {
    from_name: data.name,
    name: data.name,
    reply_to: data.email,
    user_email: data.email,
    email: data.email,
    user_phone: data.phone?.trim() ? data.phone : "Not provided",
    phone: data.phone?.trim() ? data.phone : "Not provided",
    inquiry_type: data.inquiryType || "General Inquiry",
    subject: data.subject,
    message: data.message,
    to_email: EMAILJS_CONFIG.destinationEmail,
    submission_time: new Date().toLocaleString()
  };

  // Check if Public Key is configured
  if (!publicKey || publicKey.trim() === "" || publicKey === "YOUR_PUBLIC_KEY") {
    console.warn(
      "[EmailJS Service] Public Key is not configured yet. Please add your credentials in .env (REACT_APP_EMAILJS_PUBLIC_KEY) or src/config/emailjsConfig.js. Recipient is configured as: fidelisgambo9@gmail.com"
    );
    // Simulate brief network delay for testing if unconfigured, or throw warning
    // We throw a descriptive error so the UI displays helpful setup instructions
    const err = new Error("EMAILJS_NOT_CONFIGURED");
    err.code = "EMAILJS_NOT_CONFIGURED";
    throw err;
  }

  const response = await emailjs.send(
    serviceId,
    templateId,
    templateParams,
    publicKey
  );

  return {
    success: true,
    status: response.status,
    text: response.text
  };
};
