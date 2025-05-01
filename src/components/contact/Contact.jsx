import React, { useState } from "react"
import Back from "../common/back/Back"
import { motion } from "framer-motion"
import "./contact.css"

// Animation variants
const fadeInUp = {
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

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100940.14245968247!2d8.8921!3d9.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053738a3c0a0a0a%3A0x8c0a0a0a0a0a0a0a!2sJos%2C%20Plateau%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1652535615693!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this URL with your actual backend endpoint
      const response = await fetch('https://your-backend-api.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Back title='Contact us' />
      <motion.section 
        className='contacts padding'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className='container shadow flexSB'>
          <motion.div 
            className='left row'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <iframe src={map}></iframe>
          </motion.div>
          <motion.div 
            className='right row'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp}>Contact us</motion.h1>
            <motion.p variants={fadeInUp}>We're open for any suggestion or just to have a chat</motion.p>

            <motion.div 
              className='items grid2'
              variants={staggerContainer}
            >
              <motion.div 
                className='box'
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4>ADDRESS:</h4>
                <p>123 Jos City Center, Plateau State, Nigeria</p>
              </motion.div>
              <motion.div 
                className='box'
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4>EMAIL:</h4>
                <p>info@educationfoundation.org</p>
              </motion.div>
              <motion.div 
                className='box'
                variants={fadeInUp}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <h4>PHONE:</h4>
                <p>+234 123 456 7890</p>
              </motion.div>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit}
              variants={fadeInUp}
            >
              <div className='flexSB'>
                <div>
                  <motion.input 
                    type='text' 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Name'
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div>
                  <motion.input 
                    type='email' 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Email'
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
              </div>
              <div>
                <motion.input 
                  type='text' 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder='Subject'
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>
              <div>
                <motion.textarea 
                  cols='30' 
                  rows='10'
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder='Create a message here...'
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                {errors.message && <span className="error">{errors.message}</span>}
              </div>
              <motion.button 
                className='primary-btn'
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.p 
                  className="success-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Thank you for your message! We'll get back to you soon.
                </motion.p>
              )}
              
              {submitStatus === 'error' && (
                <motion.p 
                  className="error-message"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  Sorry, there was an error sending your message. Please try again later.
                </motion.p>
              )}
            </motion.form>

            <motion.h3 variants={fadeInUp}>Follow us here</motion.h3>
            <motion.span 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              FACEBOOK TWITTER INSTAGRAM DRIBBBLE
            </motion.span>
          </motion.div>
        </div>
      </motion.section>
    </>
  )
}

export default Contact
