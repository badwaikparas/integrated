const mongoose = require('mongoose');

// Define the schema
const salesSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },        // Primary key, corresponds to int(11) NOT NULL
    invoice_id: { type: Number, required: true },             // Corresponds to int(11) NOT NULL
    status_id: { type: Number, required: true },              // Corresponds to int(11) NOT NULL
    customer_id: { type: Number, required: true },            // Corresponds to int(11) NOT NULL
    staff_id: { type: Number, required: true },               // Corresponds to int(11) NOT NULL
    total: { type: mongoose.Decimal128, required: true },     // Decimal(11,2) NOT NULL, using Decimal128 for precision
    date: { type: Date, required: true }                      // Corresponds to date NOT NULL
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Sales = mongoose.model('Sales', salesSchema);
module.exports = Sales


/// Sample data
// (37, 38, 2, 38, 5, '13000.00', '2024-03-29'),
// (38, 39, 2, 38, 5, '13000.00', '2024-04-03'),
// (39, 40, 2, 38, 5, '12000.00', '2024-04-09'),
// (40, 41, 3, 38, 5, '19000.00', '2024-04-11');


