import React, { useState } from 'react';
import InputField from '../InputField/InputField';
import PasswordField from '../PasswordField/PasswordField';
import './SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Signup Form Data:', formData);

    setFormData({
      username: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="signup-form-container">
      <h2 className="signup-form-title">Sign Up</h2>

      <div className="signup-form-content">
        <InputField
          label="Username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          placeholder="Enter your username"
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter your email"
        />

        <InputField
          label="First Name"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="Enter your first name"
        />

        <InputField
          label="Last Name"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Enter your last name"
        />

        <PasswordField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter your password"
        />

        <PasswordField
          label="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm your password"
        />

        <button 
          type="button" 
          className="signup-submit-button"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupForm;