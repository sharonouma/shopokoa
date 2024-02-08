import React, { useState } from 'react';
import './RegisterBusinessPage.css';

const RegisterBusinessPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    licenseNumber: '',
    phoneNumber: '',
    email: '',
    password: '',
    repeatPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Logic to send formData to your backend API for registration. We need to get APIendpoint here
    console.log(formData);
    
    setFormData({
      businessName: '',
      licenseNumber: '',
      phoneNumber: '',
      email: '',
      password: '',
      repeatPassword: ''
    });
  };

  return (
    <div className="register-business-page">
      <h2>Register Your Business</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="businessName" placeholder="Business Name" value={formData.businessName} onChange={handleChange} required />
        <input type="text" name="licenseNumber" placeholder="License Number" value={formData.licenseNumber} onChange={handleChange} required />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email (optional)" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <input type="password" name="repeatPassword" placeholder="Repeat Password" value={formData.repeatPassword} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default RegisterBusinessPage;
