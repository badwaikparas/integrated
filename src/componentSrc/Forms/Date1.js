import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const Date1 = ({ control, setValue, name }) => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setValue(name, date); // Update the form value with the unique name
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", marginRight: "50px", marginBottom: "20px" }}>
            <label htmlFor={name}>{name}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <ReactDatePicker
                        {...field}
                        dateFormat="d MMM yyyy"
                        minDate={new Date()}
                        selected={selectedDate}
                        onChange={handleDateChange}
                        showTimeSelect={false}
                        todayButton="Today"
                        dropdownMode="select"
                        isClearable
                        placeholderText="Click to select Date"
                        shouldCloseOnSelect
                    />
                )}
            />
        </div>
    );
};

export default Date1;
