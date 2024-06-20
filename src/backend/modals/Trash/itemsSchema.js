const mongoose = require('mongoose');

// Define the schema
const itemSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    relation_type: { type: String, default: null },             // Nullable VARCHAR(100)
    relation: { type: Number, default: null },                  // Nullable INT(5)
    product_id: { type: Number, default: null },                // Nullable INT(5)
    code: { type: String, default: null },                      // Nullable VARCHAR(100)
    name: { type: String, default: null },                      // Nullable VARCHAR(255)
    description: { type: String, default: null },               // Nullable TEXT
    quantity: { type: mongoose.Schema.Types.Decimal128, default: null }, // Nullable DECIMAL(20,2)
    unit: { type: String, default: null },                      // Nullable VARCHAR(200)
    price: { type: mongoose.Schema.Types.Decimal128, default: null },    // Nullable DECIMAL(20,2)
    tax: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },      // Default DECIMAL(20,2)
    discount: { type: mongoose.Schema.Types.Decimal128, default: 0.00 }, // Default DECIMAL(20,2)
    total: { type: mongoose.Schema.Types.Decimal128, default: null }     // Nullable DECIMAL(20,2)
});

// Export the model
const Item = mongoose.model('Item', itemSchema);
module.exports = Item


/// Sample data
// (29, 'expense', 10, 1, 'WEB', 'Web Design', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet iaculis risus.', '1.00', 'Unit', '200.00', '5.00', '0.00', '210.00'),
// (36, 'deposit', 1, NULL, 'deposit', 'deposit', 'DEP-1', '1.00', NULL, '3089550.00', '0.00', '0.00', '3089550.00'),
// (37, 'expense', 11, NULL, 'PO-000001', 'PO-000001', 'Purchase', '1.00', NULL, '2360000.00', '0.00', '0.00', '2360000.00'),
// (40, 'deposit', 2, 0, '', 'LUNCH', '', '1.00', 'Unit', '35000.00', '0.00', '0.00', '35000.00'),
// (41, 'deposit', 2, 0, '', 'CONSULTANCY', '', '1.00', 'Unit', '350000.00', '0.00', '0.00', '350000.00'),
// (42, 'deposit', 2, 0, '', 'BANK OPENING', '', '1.00', 'UNIT', '100000.00', '0.00', '0.00', '100000.00'),
// (43, 'expense', 12, 0, '', 'STANLEY', '', '1.00', 'Unit', '485000.00', '0.00', '0.00', '485000.00'),
// (44, 'expense', 13, 0, '', 'STICKER', '', '1.00', 'Unit', '25000.00', '0.00', '0.00', '25000.00'),
// (45, 'expense', 13, 0, '', 'STICKER', '29.07.22', '1.00', 'Unit', '180000.00', '0.00', '0.00', '180000.00'),
// (46, 'expense', 13, 0, '', 'STICKER', 'BHANU', '1.00', 'Unit', '128346.00', '0.00', '0.00', '128346.00'),
// (47, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '8189.00', '0.00', '0.00', '8189.00'),
// (48, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '90.00', '0.00', '0.00', '90.00'),
// (49, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '2687.50', '0.00', '0.00', '2687.50'),
// (50, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '200.00', '0.00', '0.00', '200.00'),
// (51, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '3294.00', '0.00', '0.00', '3294.00'),
// (52, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '247.05', '0.00', '0.00', '247.05'),
// (53, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '72.00', '0.00', '0.00', '72.00'),
// (54, 'expense', 14, 0, '', 'BC', '', '1.00', 'Unit', '53.76', '0.00', '0.00', '53.76'),
// (55, 'deposit', 3, 0, '', 'HPT', '', '16.00', 'Unit', '174000.00', '7.50', '0.00', '2992800.00'),
// (56, 'deposit', 3, 0, '', 'TRANSPORT', '', '1.00', 'Unit', '90000.00', '7.50', '0.00', '96750.00'),
// (63, 'expense', 15, NULL, 'PO-000000', 'PO-000000', 'Purchase', '1.00', NULL, '2230000.00', '0.00', '0.00', '2230000.00'),
// (65, 'expense', 16, NULL, 'PO-000000', 'PO-000000', 'Purchase', '1.00', NULL, '620000.00', '0.00', '0.00', '620000.00'),
// (68, 'expense', 17, NULL, 'PO-000000', 'PO-000000', 'Purchase', '1.00', NULL, '270000.00', '0.00', '0.00', '270000.00'),
// (69, 'deposit', 6, 0, '', 'HPT', '', '2.00', 'Unit', '175000.00', '7.50', '0.00', '376250.00'),
// (72, 'expense', 18, 0, 'PO-000000', 'PO-000000', 'Purchase', '1.00', '', '256500.00', '0.00', '0.00', '256500.00'),
// (75, 'expense', 19, 0, 'PO-000000', 'PO-000000', 'Purchase', '1.00', '', '430000.00', '0.00', '0.00', '430000.00'),
// (80, 'expense', 20, 0, 'PO-000000', 'PO-000000', 'Purchase', '1.00', '', '1075000.00', '0.00', '0.00', '1075000.00'),
// (84, 'expense', 21, 0, 'PO-000000', 'PO-000000', 'Purchase', '1.00', '', '350000.00', '0.00', '0.00', '350000.00'),
// (103, 'expense', 22, NULL, 'PO-000000', 'PO-000000', 'Purchase', '1.00', NULL, '50000.00', '0.00', '0.00', '50000.00'),
// (104, 'purchase', 10, 17, 'Pl', 'Prime Load', 'Load', '50000.00', 'Rs.', '1.00', '0.00', '0.00', '50000.00'),
// (105, 'expense', 23, 0, 'PO-000000', 'PO-000000', 'Purchase', '1.00', '', '50000.00', '0.00', '0.00', '50000.00'),
// (106, 'invoice', 38, 17, 'Pl', 'Prime Load', 'Load', '13000.00', 'Unit', '1.00', '0.00', '0.00', '13000.00'),
// (107, 'deposit', 12, NULL, 'deposit', 'deposit', 'DEP-5', '1.00', NULL, '13000.00', '0.00', '0.00', '13000.00'),
// (108, 'deposit', 13, 0, '', 'New', '', '5000.00', 'Rs', '1.00', '0.00', '0.00', '5000.00'),
// (110, 'deposit', 15, 0, '', 'ecovery', 'Customer', '1.00', '', '10000.00', '0.00', '0.00', '10000.00'),
// (111, 'deposit', 16, 0, '', 'New', '', '1.00', 'Unit', '10000.00', '0.00', '0.00', '10000.00'),
// (112, 'deposit', 17, 0, '', 'New', '', '1.00', 'Unit', '25000.00', '0.00', '0.00', '25000.00'),
// (113, 'deposit', 18, 19, 'Wl', 'Wateen Load', 'Load', '15000.00', 'Rs', '1.00', '0.00', '0.00', '15000.00'),
// (114, 'invoice', 39, 19, 'Wl', 'Wateen Load', 'Load', '13000.00', 'Unit', '1.00', '0.00', '0.00', '13000.00'),
// (116, 'expense', 24, 0, '', 'New', '', '1.00', 'Unit', '0.00', '0.00', '0.00', '0.00'),
// (117, 'invoice', 40, 18, 'Cl', 'Connect Load', 'Load', '12000.00', 'Unit', '1.00', '0.00', '0.00', '12000.00'),
// (118, 'deposit', 19, NULL, 'deposit', 'deposit', 'DEP-11', '1.00', NULL, '12000.00', '0.00', '0.00', '12000.00'),
// (119, 'deposit', 20, NULL, 'deposit', 'deposit', 'DEP-11', '1.00', NULL, '12000.00', '0.00', '0.00', '12000.00'),
// (120, 'deposit', 21, NULL, 'deposit', 'deposit', 'DEP-11', '1.00', NULL, '12000.00', '0.00', '0.00', '12000.00'),
// (121, 'deposit', 22, NULL, 'deposit', 'deposit', 'DEP-11', '1.00', NULL, '12000.00', '0.00', '0.00', '12000.00'),
// (122, 'deposit', 23, NULL, 'deposit', 'deposit', 'DEP-11', '1.00', NULL, '13000.00', '0.00', '0.00', '13000.00'),
// (123, 'deposit', 24, 0, '', '', 'recovery', '6000.00', 'Unit', '1.00', '0.00', '0.00', '6000.00'),
// (124, 'purchase', 11, 20, 'Tl', 'Transworld Load', 'Load', '70000.00', 'Unit', '1.00', '0.00', '0.00', '70000.00'),
// (125, 'invoice', 41, NULL, NULL, 'Transworld Load', 'Load', '19000.00', 'Unit', '1.00', '0.00', '0.00', '19000.00'),
// (126, 'invoice', 41, NULL, NULL, 'New', '', '1.00', 'Unit', '0.00', '0.00', '0.00', '0.00');
