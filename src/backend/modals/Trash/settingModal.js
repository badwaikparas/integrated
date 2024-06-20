const mongoose = require('mongoose');

// Define the schema
const settingsSchema = new mongoose.Schema({
    settingname: { type: String, required: true },
    crm_name: { type: String, default: 'Ciuis™ CRM' },
    company: { type: String, default: null },
    email: { type: String, default: null },
    address: { type: String, required: true },
    country_id: { type: Number, default: null },
    state: { type: String, default: null },
    state_id: { type: Number, default: null },
    city: { type: String, default: null },
    town: { type: String, default: null },
    zipcode: { type: String, default: null },
    phone: { type: String, default: null },
    fax: { type: String, required: true },
    taxoffice: { type: String, default: null },
    vatnumber: { type: String, default: null },
    thousand_separator: { type: String, default: 'auto' },
    currencyid: { type: Number, required: true },
    currency_position: { type: String, default: 'auto' },
    decimal_separator: { type: String, default: 'auto' },
    currency_display: { type: String, default: 'code' },
    termtitle: { type: String, required: true },
    termdescription: { type: String, required: true },
    dateformat: { type: String, default: null },
    default_timezone: { type: String, required: true },
    languageid: { type: String, required: true },
    email_type: { type: Number, default: 1 },
    smtphost: { type: String, default: null },
    smtpport: { type: String, default: null },
    emailcharset: { type: String, default: null },
    email_encryption: { type: Number, required: true },
    smtpusername: { type: String, default: null },
    smtppassoword: { type: String, default: null },
    sendermail: { type: String, default: null },
    sender_name: { type: String, default: null },
    logo: { type: String, default: null },
    app_logo: { type: String, default: null },
    accepted_files_formats: { type: String, required: true, default: 'jpg,jpeg,doc,png,txt,docx' },
    allowed_ip_adresses: { type: String, default: null },
    pushState: { type: Number, required: true },
    voicenotification: { type: Number, required: true },
    converted_lead_status_id: { type: Number, default: null },
    two_factor_authentication: { type: Number, default: null },
    is_demo: { type: Boolean, default: false },
    is_mysql: { type: Boolean, default: false }
});

// Export the model
const Settings = mongoose.model('Settings', settingsSchema);
module.exports = Settings
