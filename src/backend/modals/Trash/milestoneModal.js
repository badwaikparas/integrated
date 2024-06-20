const mongoose = require('mongoose');

// Define the schema
const milestoneSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },        // Primary key
    order: { type: Number, required: true, default: 0 },      // Not null INT(5), with default value
    name: { type: String, required: true },                   // Not null VARCHAR(100)
    description: { type: String, default: null },             // Nullable TEXT
    duedate: { type: Date, required: true },                  // Not null DATE
    project_id: { type: Number, required: true },             // Not null INT(5)
    color: { type: String, default: null },                   // Nullable VARCHAR(10)
    created: { type: Date, required: true }                   // Not null DATE
});

// Export the model
const Milestone = mongoose.model('Milestone', milestoneSchema);
module.exports = Milestone
