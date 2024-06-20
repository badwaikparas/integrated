const mongoose = require('mongoose');

// Define the schema
const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },           // Primary key
    product_number: { type: String, default: null },              // Nullable VARCHAR(100)
    code: { type: String, required: true },                       // Not null VARCHAR(255)
    productname: { type: String, default: null },                 // Nullable VARCHAR(255)
    categoryid: { type: Number, required: true },                 // Not null INT(11)
    description: { type: String, required: true },                // Not null TEXT
    productimage: { type: String, default: null },                // Nullable VARCHAR(255)
    purchase_price: { type: mongoose.Types.Decimal128, default: null },  // Nullable DECIMAL(20,2)
    sale_price: { type: mongoose.Types.Decimal128, default: null },      // Nullable DECIMAL(20,2)
    stock: { type: mongoose.Schema.Types.Long, default: null },   // Nullable BIGINT(20)
    vat: { type: mongoose.Types.Decimal128, default: null },      // Nullable DECIMAL(20,2)
    status_id: { type: String, enum: ['0', '1'], default: null }, // Nullable ENUM('0','1')
    product_created_by: { type: Number, default: 0 },             // Default INT(5)
    createdat: { type: Date, default: null }                      // Nullable DATETIME
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Product = mongoose.model('Product', productSchema);
module.exports = Product


/// Sample data
// (17, 'PRD-17', 'Pl', 'Prime Load', 3, 'Load', NULL, '0.80', '1.00', 0, '0.00', NULL, 5, NULL),
// (18, 'PRD-18', 'Cl', 'Connect Load', 4, 'Load', NULL, '0.80', '1.00', 0, '0.00', NULL, 5, NULL),
// (19, 'PRD-19', 'Wl', 'Wateen Load', 5, 'Load', NULL, '0.95', '1.00', 0, '0.00', NULL, 5, NULL),
// (20, 'PRD-20', 'Tl', 'Transworld Load', 6, 'Load', NULL, '0.80', '1.00', 0, '0.00', NULL, 5, NULL);