// src/components/DatePicker.js
import React from 'react';

const DatePicker = ({ label, value, onChange }) => (
    <div className="form-group">
        <label>{label}</label>
        <input
            type="date"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
);

export default DatePicker;
