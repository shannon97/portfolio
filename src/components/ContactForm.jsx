import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Use fetch or Axios to submit the form data
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
        </form>
    );
};

export default ContactForm;
