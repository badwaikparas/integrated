const mongoose = require('mongoose');

// Define the schema
const expenseSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    expense_number: { type: String, default: null },            // Nullable VARCHAR(100)
    number: { type: String, default: null },                    // Nullable VARCHAR(100)
    hash: { type: String, required: true },                     // Not null VARCHAR(6)
    relation_type: { type: String, default: null },             // Nullable VARCHAR(100)
    relation: { type: Number, default: 0 },                     // Default INT(5) 0
    title: { type: String, default: null },                     // Nullable VARCHAR(200)
    description: { type: String, default: null },               // Nullable TEXT
    category_id: { type: Number, default: null },               // Nullable INT(5)
    account_id: { type: Number, required: true },               // Not null INT(5)
    staff_id: { type: Number, required: true },                 // Not null INT(5)
    customer_id: { type: Number, default: null },               // Nullable INT(5)
    invoice_id: { type: Number, default: null },                // Nullable INT(5)
    purchase_id: { type: Number, default: null },               // Nullable INT(5)
    created: { type: Date, required: true },                    // Not null DATETIME
    date: { type: Date, required: true },                       // Not null DATE
    amount: { type: mongoose.Schema.Types.Decimal128, required: true },  // Not null DECIMAL(20,2)
    sub_total: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    total_discount: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    total_tax: { type: mongoose.Schema.Types.Decimal128, default: null },  // Nullable DECIMAL(20,2)
    internal: { type: Boolean, required: true, default: false },// Not null TINYINT(1) converted to BOOLEAN
    recurring: { type: Number, default: null },                 // Nullable INT(5)
    last_recurring: { type: Date, default: null },              // Nullable DATE
    pdf_status: { type: Boolean, default: false },              // Default TINYINT(1) converted to BOOLEAN
    expense_created_by: { type: Number, default: null }         // Nullable INT(11)
});

// Export the model
const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense

// Sample data
// (23, 'EXP-23', '', '', NULL, 0, 'Purchase', NULL, 4, 5, 5, NULL, NULL, 10, '2024-03-29 12:25:49', '2024-03-29', '50000.00', '50000.00', '0.00', '0.00', 1, NULL, '2024-03-29', 0, NULL),
// (24, 'EXP-24', '', '02aa45', NULL, 0, 'invoice', NULL, 15, 1, 5, 38, 41, NULL, '2024-04-09 11:17:33', '2024-04-09', '19000.00', '19000.00', '0.00', '0.00', 0, NULL, '2024-04-09', 0, 5);