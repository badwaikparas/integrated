const mongoose = require('mongoose');

// Define the schema
const invoiceSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    invoice_number: { type: String, default: null },            // Nullable VARCHAR(100)
    invoiceId: { type: String, default: null },                 // Nullable VARCHAR(100)
    token: { type: String, required: true },                    // Not null MEDIUMTEXT
    no: { type: String, default: null },                        // Nullable VARCHAR(50)
    serie: { type: String, default: null },                     // Nullable VARCHAR(255)
    created: { type: Date, default: null },                     // Nullable DATE
    duedate: { type: Date, default: null },                     // Nullable DATE
    customer_id: { type: Number, required: true },              // Not null INT(5)
    expense_id: { type: Number, default: null },                // Nullable INT(5)
    proposal_id: { type: Number, default: null },               // Nullable INT(5)
    project_id: { type: Number, default: null },                // Nullable INT(5)
    staff_id: { type: Number, default: null },                  // Nullable INT(5)
    datesend: { type: Date, default: null },                    // Nullable DATETIME
    datepayment: { type: Date, default: null },                 // Nullable DATE
    duenote: { type: String, default: null },                   // Nullable VARCHAR(255)
    status_id: { type: Number, default: null },                 // Nullable INT(11)
    sub_total: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    total_discount: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    total_tax: { type: mongoose.Schema.Types.Decimal128, default: null },  // Nullable DECIMAL(20,2)
    total: { type: mongoose.Schema.Types.Decimal128, default: null },      // Nullable DECIMAL(20,2)
    amount_paying: { type: String, default: null },             // Nullable VARCHAR(50)
    default_payment_method: { type: String, default: null },    // Nullable VARCHAR(50)
    CustomField: { type: String, required: true },              // Not null VARCHAR(255)
    billing_street: { type: String, required: true },           // Not null VARCHAR(100)
    billing_city: { type: String, required: true },             // Not null VARCHAR(100)
    billing_state: { type: String, required: true },            // Not null VARCHAR(100)
    billing_state_id: { type: Number, default: null },          // Nullable INT(5)
    billing_zip: { type: String, required: true },              // Not null VARCHAR(50)
    billing_country: { type: Number, required: true },          // Not null INT(5)
    shipping_street: { type: String, required: true },          // Not null VARCHAR(100)
    shipping_city: { type: String, required: true },            // Not null VARCHAR(100)
    shipping_state: { type: String, required: true },           // Not null VARCHAR(100)
    shipping_state_id: { type: Number, default: null },         // Nullable INT(5)
    shipping_zip: { type: String, required: true },             // Not null VARCHAR(100)
    shipping_country: { type: Number, required: true },         // Not null INT(5)
    recurring: { type: Number, required: true, default: 0 },    // Not null INT(2)
    last_recurring: { type: Date, default: null },              // Nullable DATE
    pdf_status: { type: Boolean, default: false }               // Default TINYINT(1) converted to BOOLEAN
});

// Export the model
const Invoice = mongoose.model('Invoice', invoiceSchema);
module.exports = Invoice;



// invoice status

// CREATE TABLE `invoicestatus` (
//     `id` int(11) NOT NULL,
//     `name` varchar(255) DEFAULT NULL,
//     `color` varchar(255) DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

// INSERT INTO `invoicestatus` (`id`, `name`, `color`) VALUES
// (1, 'Draft', '#7d7d7d'),
// (2, 'Paid', '#26c281'),
// (3, 'Unpaid', '#ff3b30'),
// (4, 'Cancelled', '#dd2c00');