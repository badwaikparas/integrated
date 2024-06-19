const mongoose = require('mongoose');

// Define the schema
const paymentSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },       // Primary key
    transactiontype: { type: Number, required: true },        // Not null INT(5)
    is_transfer: { type: Number, default: null },            // Nullable INT(5)
    deposit_id: { type: Number, default: null },             // Nullable INT(5)
    invoice_id: { type: Number, default: null },             // Nullable INT(5)
    expense_id: { type: Number, default: null },             // Nullable INT(5)
    purchase_id: { type: Number, default: null },            // Nullable INT(5)
    customer_id: { type: Number, default: null },            // Nullable INT(5)
    vendor_id: { type: Number, default: null },              // Nullable INT(5)
    amount: { type: mongoose.Types.Decimal128, required: true },   // Not null DECIMAL(11,2)
    account_id: { type: Number, default: null },             // Nullable INT(5)
    mode: { type: String, default: null },                   // Nullable VARCHAR(255)
    date: { type: Date, required: true },                    // Not null DATETIME
    not: { type: String, required: true },                   // Not null VARCHAR(255)
    attachment: { type: String, default: null },             // Nullable VARCHAR(200)
    staff_id: { type: Number, required: true }               // Not null INT(5)
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment


//   `id` int(11) NOT NULL,
//   `name` varchar(255) DEFAULT NULL,
//   `image` varchar(255) DEFAULT NULL,
//   `input_label1` varchar(255) DEFAULT NULL,
//   `input_label2` varchar(255) DEFAULT NULL,
//   `input_label3` varchar(255) DEFAULT NULL,
//   `active` varchar(1) DEFAULT '0',
//   `input_value1` varchar(255) DEFAULT NULL,
//   `input_value2` varchar(255) DEFAULT NULL,
//   `input_value3` varchar(255) DEFAULT NULL,
//   `sandbox_account` varchar(1) DEFAULT '0',
//   `payment_record_account` varchar(11) DEFAULT NULL,
//   `relation` varchar(255) DEFAULT NULL,
//   `payment_url` varchar(255) DEFAULT NULL,
//   `gateway_note` varchar(255) DEFAULT NULL,
//   `updated_at` datetime DEFAULT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

// CREATE TABLE `payment_modes` (
//     `id` int(11) NOT NULL,
//     `name` varchar(255) DEFAULT NULL,
//     `value` longtext DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


// CREATE TABLE `payment_transactions` (
//     `id` int(11) NOT NULL,
//     `relation_type` varchar(100) DEFAULT NULL,
//     `relation_id` int(11) DEFAULT NULL,
//     `status` varchar(100) DEFAULT NULL,
//     `transaction_id` varchar(100) DEFAULT NULL,
//     `token` mediumtext DEFAULT NULL,
//     `method` varchar(100) DEFAULT NULL,
//     `updated_at` datetime DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

// CREATE TABLE `pending_process` (
//     `process_id` int(11) NOT NULL,
//     `process_type` varchar(100) DEFAULT 'pdf',
//     `process_relation` int(5) DEFAULT NULL,
//     `process_relation_type` varchar(100) DEFAULT NULL,
//     `process_template_name` varchar(200) DEFAULT NULL,
//     `process_created` datetime DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;