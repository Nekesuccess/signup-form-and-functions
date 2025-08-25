import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import './PasswordField.css';

const PasswordField = ({ label, name, value, onChange, placeholder, required = true }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>{label}</label>
      <div className="password-container">
        <input
          className="input-field"
          type={showPassword ? 'text' : 'password'}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        <div className="eye-icon" onClick={togglePasswordVisibility}>
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </div>
      </div>
    </div>
  );
};

export default PasswordField;