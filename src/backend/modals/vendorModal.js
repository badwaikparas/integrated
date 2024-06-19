const mongoose = require('mongoose');

// Define the schema
const vendorSchema = new mongoose.Schema({
    vendor_number: { type: String, default: null },
    type: { type: Number, default: null },
    created: { type: Date, required: true },
    staff_id: { type: Number, required: true },
    company: { type: String, default: null },
    namesurname: { type: String, default: null },
    groupid: { type: Number, default: null },
    taxoffice: { type: String, default: null },
    taxnumber: { type: String, default: null },
    ssn: { type: String, default: null },
    executive: { type: String, default: null },
    address: { type: String, default: null },
    zipcode: { type: String, default: null },
    country_id: { type: Number, default: null },
    state: { type: String, default: null },
    city: { type: String, default: null },
    town: { type: String, default: null },
    phone: { type: String, default: null },
    fax: { type: String, default: null },
    email: { type: String, default: null },
    web: { type: String, default: null },
    risk: { type: Number, default: 0 },
    vendor_status_id: { type: Number, default: 1 }
});

// Export the model
const Vendor = mongoose.model('Vendor', vendorSchema);
module.exports = Vendor


// CREATE TABLE `vendors_groups` (
//     `id` int(11) NOT NULL,
//     `name` varchar(255) DEFAULT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


// CREATE TABLE `vendor_sales` (
//     `id` int(11) NOT NULL,
//     `purchase_id` int(5) NOT NULL,
//     `status_id` int(5) NOT NULL,
//     `vendor_id` int(5) NOT NULL,
//     `staff_id` int(5) NOT NULL,
//     `total` decimal(11,2) NOT NULL,
//     `date` date NOT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;