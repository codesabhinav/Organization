'use client'
import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { showToast } from '../toast/CustomToast';
import { toast } from 'react-hot-toast';
import { EMAILJS_CONFIG } from '@/config/emailjs';

function ContactFormBox() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const { name, email, number, subject, message } = formData;
    
    if (!name.trim()) {
      showToast('Please enter your name', 'error');
      return false;
    }
    
    if (!email.trim()) {
      showToast('Please enter your email address', 'error');
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast('Please enter a valid email address', 'error');
      return false;
    }
    
    if (!number.trim()) {
      showToast('Please enter your phone number', 'error');
      return false;
    }
    
    if (!subject.trim()) {
      showToast('Please enter a subject', 'error');
      return false;
    }
    
    if (!message.trim()) {
      showToast('Please enter your message', 'error');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    showToast('Sending your message...', 'loading');

    try {
      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const result = await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current!,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Dismiss loading toast
      toast.dismiss();

      if (result.status === 200) {
        showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          number: '',
          subject: '',
          message: ''
        });
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        showToast('Failed to send message. Please try again.', 'error');
      }
    } catch (error) {
      // Dismiss loading toast
      toast.dismiss();
      console.error('EmailJS Error:', error);
      showToast('Failed to send message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} className="row g-4" onSubmit={handleSubmit}>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="name">
            Your Name*
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="email">
            Email Address*
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="number">
            Phone Number*
          </label>
          <input
            type="text"
            className="form-control"
            id="number"
            name="number"
            placeholder="5345345"
            value={formData.number}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="subject">
            Subject*
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-xl-12">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="message">
            Describe your message*
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows={5}
            placeholder="Message"
            value={formData.message}
            onChange={handleInputChange}
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          className="tz-button tz-button--full tz-text-l tz-bg-primary"
          disabled={isSubmitting}
          style={{ opacity: isSubmitting ? 0.7 : 1 }}
        >
          {isSubmitting ? (
            <>
              <i className="ph ph-spinner" style={{ animation: 'spin 1s linear infinite' }} />
              {' '}Sending...
            </>
          ) : (
            'Send Message'
          )}
        </button>
      </div>
    </form>
  );
}

export default ContactFormBox;
