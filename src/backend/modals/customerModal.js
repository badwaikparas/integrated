const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },           // Primary key
    customer_number: { type: String, default: null },
    type: { type: Number, default: null },
    created: { type: Date, required: true },                      // Not null
    staff_id: { type: Number, required: true },                   // Not null
    company: { type: String, default: null },
    namesurname: { type: String, default: null },
    groupid: { type: Number, required: true },                    // Not null
    taxoffice: { type: String, default: null },
    taxnumber: { type: String, default: null },
    ssn: { type: String, default: null },
    executive: { type: String, default: null },
    address: { type: String, default: null },
    zipcode: { type: String, default: null },
    country_id: { type: Number, default: null },
    state: { type: String, default: null },
    state_id: { type: Number, default: null },
    city: { type: String, default: null },
    town: { type: String, default: null },
    billing_street: { type: String, required: true },             // Not null
    billing_city: { type: String, required: true },               // Not null
    billing_state: { type: String, required: true },              // Not null
    billing_state_id: { type: Number, default: null },
    billing_zip: { type: String, required: true },                // Not null
    billing_country: { type: Number, required: true },            // Not null
    shipping_street: { type: String, required: true },            // Not null
    shipping_city: { type: String, required: true },              // Not null
    shipping_state: { type: String, required: true },             // Not null
    shipping_state_id: { type: Number, default: null },
    shipping_zip: { type: String, required: true },               // Not null
    shipping_country: { type: Number, required: true },           // Not null
    latitude: { type: String, required: true },                   // Not null
    longitude: { type: String, required: true },                  // Not null
    phone: { type: String, default: null },
    fax: { type: String, default: null },
    email: { type: String, default: null },
    web: { type: String, default: null },
    risk: { type: Number, default: 0 },                           // Default value
    customer_status_id: { type: Number, default: 1, enum: [0, 1], comment: '0 = Inactive | 1 = Active' }, // Enum for status
    subsidiary_parent_id: { type: Number, required: true },       // Not null
    default_payment_method: { type: String, default: null }
});

// Exporting the model
const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer
