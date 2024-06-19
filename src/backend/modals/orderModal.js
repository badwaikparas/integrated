const mongoose = require('mongoose');

// Define the schema
const orderSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },      // Primary key
    order_number: { type: String, default: null },           // Nullable VARCHAR(100)
    token: { type: String, required: true },                 // Not null MEDIUMTEXT
    subject: { type: String, default: null },                // Nullable VARCHAR(300)
    content: { type: String, default: null },                // Nullable LONGTEXT
    date: { type: Date, required: true },                    // Not null DATE
    created: { type: Date, required: true },                 // Not null DATE
    opentill: { type: Date, default: null },                 // Nullable DATE
    relation_type: { type: String, default: null },          // Nullable VARCHAR(100)
    relation: { type: Number, default: null },               // Nullable INT(5)
    assigned: { type: Number, default: null },               // Nullable INT(5)
    addedfrom: { type: Number, required: true },             // Not null INT(5)
    datesend: { type: Date, default: null },                 // Nullable DATETIME
    comment: { type: Number, default: null },                // Nullable INT(5)
    status_id: { type: Number, required: true, default: 0 }, // Not null INT(5) with default value
    invoice_id: { type: Number, default: null },             // Nullable INT(5)
    dateconverted: { type: Date, default: null },            // Nullable DATETIME
    sub_total: { type: mongoose.Types.Decimal128, default: null },    // Nullable DECIMAL(20,2)
    total_discount: { type: mongoose.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    total_tax: { type: mongoose.Types.Decimal128, default: null },      // Nullable DECIMAL(20,2)
    total: { type: mongoose.Types.Decimal128, default: null },          // Nullable DECIMAL(20,2)
    pdf_status: { type: Boolean, default: false }            // Boolean, default false (tinyint(1))
})  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Order = mongoose.model('Order', orderSchema);
module.exports = Order
