const mongoose = require('mongoose');

// Define the schema
const meetingSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },        // Primary key
    title: { type: String, required: true },                   // Not null VARCHAR(100)
    description: { type: String, required: true },             // Not null TEXT
    customer_id: { type: Number, required: true },             // Not null INT(5)
    staff_id: { type: Number, required: true },                // Not null INT(5)
    date: { type: Date, required: true },                      // Not null DATE
    start: { type: String, required: true },                   // Not null TIME
    end: { type: String, required: true }                      // Not null TIME
});

// Export the model
const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting

/// Sample data
// (1, 'Toyota Dallas Meet', 'Im going to DHARMA Initiative this day.', 17, 1, '2018-04-16', '13:00:00', '14:00:00'),
// (2, 'Wallmart Dallas Meet', 'Im going to Parallax Corporation this day.', 18, 1, '2018-04-17', '16:00:00', '17:00:00'),
// (3, 'Test', 'Test', 16, 2, '2018-04-20', '13:00:00', '15:00:00'),
// (4, 'asdfsa', '', 0, 0, '2018-04-16', '04:43:07', '04:43:07'),
// (5, 'Customer Visit', 'Visit', 17, 1, '2018-05-02', '15:00:00', '17:00:00'),
// (6, 'Customer Visit', 'Visit', 18, 1, '2018-05-03', '15:00:00', '17:00:00'),
// (7, 'Bla Bla', 'Test', 17, 1, '2018-05-30', '15:00:00', '18:00:00'),
// (8, 'Test', 'Tes', 16, 1, '2018-05-15', '16:35:33', '18:35:58'),
// (9, 'ACCESO RWM', 'ACCESO REMOTO', 16, 2, '2022-01-27', '22:15:00', '23:15:00');