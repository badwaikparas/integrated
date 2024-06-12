// src/components/Dropdown.js
import React from 'react';

const Dropdown = ({ label, value, onChange, options, required }) => (
    <div className="form-group">
        <label>{label} {required && '*'}</label>
        <select value={value} onChange={(e) => onChange(e.target.value)} required={required}>
            <option value="">Select an option</option>
            {options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
            ))}
        </select>
    </div>
);

export default Dropdown;
