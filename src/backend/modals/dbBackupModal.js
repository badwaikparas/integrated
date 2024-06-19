const mongoose = require('mongoose');

// Define the schema
const dbBackupSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },  // Primary key, unique
    filename: { type: String, default: null },           // Nullable VARCHAR(255)
    version: { type: String, default: null },            // Nullable VARCHAR(10)
    created: { type: Date, default: null },              // Nullable DATETIME
    staff_id: { type: Number, default: null },           // Nullable INT(11)
    status: { type: Number, default: 1, enum: [0, 1] }   // TINYINT(1), default 1
});

// Export the model
const DBBackup = mongoose.model('DBBackup', dbBackupSchema);
module.exports = DBBackup;
