const mongoose = require('mongoose');

// Define the schema
const leadSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },              // Primary key
    lead_number: { type: String, default: null },                    // Nullable VARCHAR(100)
    date_contacted: { type: Date, required: true },                  // Not null DATETIME
    type: { type: Number, default: null },                           // Nullable INT(11)
    name: { type: String, required: true },                          // Not null VARCHAR(200)
    title: { type: String, default: null },                          // Nullable VARCHAR(100)
    company: { type: String, default: null },                        // Nullable VARCHAR(200)
    description: { type: String, default: null },                    // Nullable TEXT
    country_id: { type: Number, required: true, default: 0 },        // Not null INT(11)
    zip: { type: String, default: null },                            // Nullable VARCHAR(15)
    city: { type: String, default: null },                           // Nullable VARCHAR(100)
    state: { type: String, default: null },                          // Nullable VARCHAR(50)
    state_id: { type: Number, default: null },                       // Nullable INT(5)
    email: { type: String, default: null },                          // Nullable VARCHAR(150)
    address: { type: String, default: null },                        // Nullable VARCHAR(255)
    website: { type: String, default: null },                        // Nullable VARCHAR(150)
    phone: { type: String, default: null },                          // Nullable VARCHAR(50)
    assigned_id: { type: Number, required: true },                   // Not null INT(5)
    created: { type: Date, required: true },                         // Not null DATE
    status: { type: Number, required: true },                        // Not null INT(5)
    source: { type: Number, required: true },                        // Not null INT(5)
    lastcontact: { type: Date, default: null },                      // Nullable DATETIME
    dateassigned: { type: Date, default: null },                     // Nullable DATE
    staff_id: { type: Number, required: true },                      // Not null INT(5)
    dateconverted: { type: Date, default: null },                    // Nullable DATETIME
    lost: { type: Boolean, default: false },                         // Default TINYINT(1) converted to BOOLEAN
    junk: { type: Number, default: 0 },                              // Default INT(5)
    public: { type: Boolean, default: false },                       // Default TINYINT(1) converted to BOOLEAN
    weblead: { type: Number, default: null },                        // Nullable INT(5)
    lead_status_id: { type: Number, default: 1 }                     // Default INT(5)
});



// Export the model
const Lead = mongoose.model('Lead', leadSchema);
module.exports = Lead



// CREATE TABLE `leadssources` (
//     `id` int(11) NOT NULL,
//     `name` varchar(150) NOT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


// CREATE TABLE `leadsstatus` (
//     `id` int(11) NOT NULL,
//     `name` varchar(50) NOT NULL,
//     `color` varchar(10) DEFAULT '#28B8DA'
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;