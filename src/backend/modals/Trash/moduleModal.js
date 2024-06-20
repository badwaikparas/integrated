const mongoose = require('mongoose');

// Define the schema
const moduleSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },      // Primary key
    name: { type: String, default: null },                   // Nullable VARCHAR(255)
    status: { type: Boolean, default: false },               // Boolean, default false (tinyint(1))
    license: { type: String, default: null },                // Nullable VARCHAR(255)
    version: { type: String, default: null },                // Nullable VARCHAR(10)
    last_updated: { type: Date, default: null },             // Nullable DATE
    last_version: { type: String, default: null },           // Nullable VARCHAR(10)
    updatedat: { type: Date, default: null }                 // Nullable DATETIME
});

// Export the model
const Module = mongoose.model('Module', moduleSchema);
module.exports = Module
