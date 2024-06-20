const mongoose = require('mongoose');

// Define the schema
const projectSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    project_number: { type: String, default: null },             // Nullable VARCHAR(100)
    name: { type: String, required: true },                      // Not null VARCHAR(255)
    description: { type: String, default: null },                // Nullable TEXT
    projectvalue: { type: mongoose.Types.Decimal128, default: 0 }, // Default DECIMAL(20,2)
    tax: { type: mongoose.Types.Decimal128, default: 0 },         // Default DECIMAL(20,2)
    status_id: { type: Number, required: true, default: 0 },     // Not null INT(5)
    customer_id: { type: Number, required: true },               // Not null INT(5)
    invoice_id: { type: Number, required: true },                // Not null INT(5)
    start_date: { type: Date, required: true },                  // Not null DATE
    deadline: { type: Date, default: null },                     // Nullable DATE
    created: { type: Date, required: true },                     // Not null DATE
    finished: { type: Date, default: null },                     // Nullable DATETIME
    pinned: { type: Number, required: true },                    // Not null INT(5)
    staff_id: { type: Number, required: true },                  // Not null INT(5)
    template: { type: Boolean, default: false },                 // Default TINYINT(1) as BOOLEAN
    pdf_report: { type: Boolean, default: false }               // Default TINYINT(1) as BOOLEAN
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Project = mongoose.model('Project', projectSchema);
module.exports = Project


// CREATE TABLE `projectservices` (
//     `id` int(11) NOT NULL,
//     `projectid` int(5) DEFAULT NULL,
//     `categoryid` int(5) DEFAULT NULL,
//     `categoryname` varchar(255) DEFAULT NULL,
//     `productid` int(5) DEFAULT NULL,
//     `servicename` varchar(255) DEFAULT NULL,
//     `serviceprice` decimal(20,2) DEFAULT NULL,
//     `quantity` varchar(20) DEFAULT '1',
//     `unit` varchar(100) DEFAULT 'Unit',
//     `servicetax` decimal(20,2) DEFAULT NULL,
//     `servicedescription` varchar(255) DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;