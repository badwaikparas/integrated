// src/components/TextInput.js
import React from 'react';

const TextInput = ({ label, value, onChange, required }) => (
    <div className="form-group">
        <label>{label} {required && '*'}</label>
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
        />
    </div>
);

export default TextInput;
