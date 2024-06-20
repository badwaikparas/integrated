const mongoose = require('mongoose');

// Define the schema
const eventSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    title: { type: String, required: true },                     // Not null VARCHAR(200)
    detail: { type: String, required: true },                    // Not null VARCHAR(255)
    staff_id: { type: Number, required: true },                  // Not null INT(5)
    added_by: { type: Number, default: null },                   // Nullable INT(5)
    staffname: { type: String, required: true },                 // Not null VARCHAR(255)
    start: { type: Date, default: null },                        // Nullable DATETIME
    end: { type: Date, default: null },                          // Nullable DATETIME
    color: { type: String, default: null },                      // Nullable VARCHAR(100)
    public: { type: String, default: '0' },                      // Default VARCHAR(10) '0'
    reminder: { type: Number, default: null },                   // Nullable TINYINT(1)
    event_type: { type: Number, default: null },                 // Nullable INT(5)
    is_all: { type: Number, default: 0 },                        // Default TINYINT(1) 0
    created: { type: Date, default: null }                       // Nullable DATETIME
});

// Export the model
const Event = mongoose.model('Event', eventSchema);
module.exports = Event
