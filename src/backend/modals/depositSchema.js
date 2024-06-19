const mongoose = require('mongoose');

// Define the schema
const depositSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    deposit_number: { type: String, default: null },             // Nullable VARCHAR(100)
    token: { type: String, required: true },                     // Not null VARCHAR(200)
    relation_type: { type: String, default: null },              // Nullable VARCHAR(100)
    title: { type: String, default: null },                      // Nullable VARCHAR(200)
    description: { type: String, default: null },                // Nullable TEXT
    category_id: { type: Number, required: true },               // Not null INT(5)
    account_id: { type: Number, required: true },                // Not null INT(5)
    staff_id: { type: Number, required: true },                  // Not null INT(5)
    customer_id: { type: Number, required: true },               // Not null INT(5)
    invoice_id: { type: Number, default: null },                 // Nullable INT(5)
    created: { type: Date, required: true },                     // Not null DATETIME
    date: { type: Date, required: true },                        // Not null DATE
    amount: { type: mongoose.Schema.Types.Decimal128, required: true },   // Not null DECIMAL(20,2)
    sub_total: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    total_tax: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    status: { type: Number, default: null, enum: [0, 1, 2], comment: 'Unpaid-0, Paid-1, Internal-2' }, // Nullable INT(5)
    recurring: { type: Number, default: null },                  // Nullable INT(5)
    last_recurring: { type: Date, default: null },               // Nullable DATE
    pdf_status: { type: Number, required: true, default: 0 },    // Not null TINYINT(1)
    deposits_created_by: { type: Number, default: null }         // Nullable INT(5)
});

// Export the model
const Deposit = mongoose.model('Deposit', depositSchema);
module.exports = Deposit
