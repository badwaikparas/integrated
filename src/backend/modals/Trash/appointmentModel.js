const mongoose = require('mongoose');

// Define the schema
const appointmentSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true, // Ensure each appointment has a unique ID
    },
    contact_id: {
        type: Number,
        required: true,
    },
    staff_id: {
        type: Number,
        required: true,
    },
    booking_date: {
        type: Date,
        required: true,
    },
    start_time: {
        type: String, // Use 'HH:MM' format for time
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{2}:\d{2}$/.test(v); // Regex to match 'HH:MM' format
            },
            message: props => `${props.value} is not a valid time format! Use 'HH:MM'.`
        }
    },
    end_time: {
        type: String, // Use 'HH:MM' format for time
        required: true,
        validate: {
            validator: function (v) {
                return /^\d{2}:\d{2}$/.test(v); // Regex to match 'HH:MM' format
            },
            message: props => `${props.value} is not a valid time format! Use 'HH:MM'.`
        }
    },
    status: {
        type: Number,
        required: true,
        // Add validation or enum if specific status values are used.
        // Example:
        // enum: [0, 1, 2], // Replace with actual valid status values
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields


const Appointment = mongoose.modal("Appointment", appointmentSchema)
module.exports = Appointment
