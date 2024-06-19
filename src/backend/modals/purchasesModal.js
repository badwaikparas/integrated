const mongoose = require('mongoose');

// Define the schema
const purchaseSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },           // Primary key
    purchase_number: { type: String, default: null },            // Nullable VARCHAR(100)
    token: { type: String, required: true },                     // Not null VARCHAR(200)
    no: { type: Number, default: null },                          // Nullable INT(11)
    serie: { type: String, default: null },                       // Nullable VARCHAR(255)
    created: { type: Date, default: null },                       // Nullable DATE
    duedate: { type: Date, default: null },                       // Nullable DATE
    vendor_id: { type: Number, required: true },                 // Not null INT(5)
    expense_id: { type: Number, default: null },                 // Nullable INT(5)
    proposal_id: { type: Number, default: null },                // Nullable INT(5)
    project_id: { type: Number, default: null },                 // Nullable INT(5)
    staff_id: { type: Number, default: null },                   // Nullable INT(5)
    datesend: { type: Date, default: null },                     // Nullable DATETIME
    datepayment: { type: Date, default: null },                  // Nullable DATE
    duenote: { type: String, default: null },                    // Nullable TEXT
    status_id: { type: Number, default: null },                  // Nullable INT(5)
    sub_total: { type: mongoose.Types.Decimal128, default: null }, // Nullable DECIMAL(11,2)
    total_discount: { type: mongoose.Types.Decimal128, default: null }, // Nullable DECIMAL(11,2)
    total_tax: { type: mongoose.Types.Decimal128, default: null }, // Nullable DECIMAL(11,2)
    total: { type: mongoose.Types.Decimal128, default: null },   // Nullable DECIMAL(11,2)
    recurring: { type: Number, required: true, default: 0 },     // Not null INT(5)
    last_recurring: { type: Date, default: null },               // Nullable DATE
    pdf_status: { type: Boolean, default: false }               // Default TINYINT(1) as BOOLEAN
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Purchase = mongoose.model('Purchase', purchaseSchema);
module.exports = Purchase

/// Sample data
// (10, 'PO-10', '61a468b21de92ec0f86091c2b0628bc5', 0, '', '2024-03-29', NULL, 16, NULL, NULL, NULL, 5, NULL, '2024-03-29', NULL, 2, '50000.00', '0.00', '0.00', '50000.00', 0, '2024-03-29', 0),
// (11, 'PO-1', '0f6e609d421f8c0ff5dda93277c6694a', 0, '', '2024-04-11', '2024-04-11', 15, NULL, NULL, NULL, 5, NULL, NULL, '', 3, '70000.00', '0.00', '0.00', '70000.00', 0, '2024-04-11', 0);