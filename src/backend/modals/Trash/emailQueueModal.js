const mongoose = require('mongoose');

// Define the schema
const emailQueueSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    from_name: { type: String, default: null },                  // Nullable VARCHAR(255)
    email: { type: String, default: null },                      // Nullable VARCHAR(255)
    cc: { type: String, default: null },                         // Nullable VARCHAR(255)
    bcc: { type: String, default: null },                        // Nullable VARCHAR(255)
    subject: { type: String, default: null },                    // Nullable MEDIUMTEXT
    message: { type: String, default: null },                    // Nullable MEDIUMTEXT
    attachments: { type: String, default: null },                // Nullable VARCHAR(255)
    status: { type: Number, default: 1, enum: [0, 1] },          // TINYINT(1) default 1
    display: { type: Number, default: 1, enum: [0, 1] },         // TINYINT(1) default 1
    created: { type: Date, default: null },                      // Nullable DATETIME
    send_date: { type: Date, default: null }                     // Nullable DATETIME
});

// Export the model
const EmailQueue = mongoose.model('EmailQueue', emailQueueSchema);
module.exports = EmailQueue