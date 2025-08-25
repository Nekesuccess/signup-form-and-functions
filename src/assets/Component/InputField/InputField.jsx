import React from 'react';
import './InputField.css';

const InputField = ({ label, type, name, value, onChange, placeholder, required = true }) => {
  return (
    <div className="input-group">
      <label className="input-label" htmlFor={name}>{label}</label>
      <input
        className="input-field"
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

export default InputField;