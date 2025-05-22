import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would normally handle the form submission to your backend
    alert('Thanks for reaching out! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-4">
      <div className="space-y-1">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300
            text-white placeholder-gray-500"
          placeholder="Your name"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300
            text-white placeholder-gray-500"
          placeholder="your.email@company.com"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="company" className="block text-sm font-medium text-gray-300">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300
            text-white placeholder-gray-500"
          placeholder="Your company"
        />
      </div>
      
      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none 
            focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all duration-300
            text-white placeholder-gray-500 resize-none"
          placeholder="Tell us about your needs..."
        />
      </div>
      
      <Button type="submit" primary className="w-full">
        Book Your Call
      </Button>
    </form>
  );
};

export default ContactForm;