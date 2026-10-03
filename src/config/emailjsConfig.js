/**
 * EmailJS Configuration for Brighter Land Global Mission
 * 
 * Destination / Account Email: fidelisgambo9@gmail.com
 * Official Public Organization Email: contact@brighterlandglobalmission.org
 */

export const EMAILJS_CONFIG = {
  // Service ID from EmailJS (Email Services tab)
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_5sz6n7l",

  // Template ID from EmailJS (Email Templates tab)
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_3yb9ebq",

  // Public Key from EmailJS (Account -> API Keys tab)
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "481UWWHLU0ePm4RYd",

  // Primary recipient mailbox
  destinationEmail: "fidelisgambo9@gmail.com",
  officialContactEmail: "contact@brighterlandglobalmission.org"
};
