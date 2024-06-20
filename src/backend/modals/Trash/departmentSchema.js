const mongoose = require('mongoose');

// Define the extended schema
const departmentSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },  // Primary key, unique
    name: { type: String, required: true },              // Required VARCHAR(255)
    description: { type: String, default: '' },          // Optional description
    created_at: { type: Date, default: Date.now }        // Timestamp for creation
});

// Indexing for more complex querying
departmentSchema.index({ name: 1 });

// Export the model
const Department = mongoose.model('Department', departmentSchema);
module.exports = Department
