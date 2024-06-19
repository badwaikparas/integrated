const mongoose = require('mongoose');

// Define the schema
const permissionSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },      // Primary key
    permission: { type: String, required: true },           // Not null VARCHAR(100)
    type: { type: String, required: true },                 // Not null VARCHAR(100)
    key: { type: String, required: true }                   // Not null VARCHAR(100)
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Permission = mongoose.model('Permission', permissionSchema);
module.exports = Permission

// (1, 'x_menu_invoices', 'common', 'invoices'),
// (2, 'x_menu_proposals', 'common', 'proposals'),
// (3, 'x_menu_expenses', 'non-common', 'expenses'),
// (4, 'x_menu_accounts', 'non-common', 'accounts'),
// (5, 'x_menu_customers', 'non-common', 'customers'),
// (6, 'x_menu_leads', 'non-common', 'leads'),
// (7, 'x_menu_projects', 'common', 'projects'),
// (8, 'x_menu_tasks', 'non-common', 'tasks'),
// (9, 'x_menu_tickets', 'common', 'tickets'),
// (10, 'x_menu_products', 'non-common', 'products'),
// (11, 'x_menu_staff', 'non-common', 'staff'),
// (12, 'x_menu_reports', 'non-common', 'report'),
// (13, 'x_menu_orders', 'non-common', 'orders'),
// (14, 'x_menu_emails', 'non-common', 'emails'),
// (15, 'x_menu_timesheets', 'non-common', 'timesheets'),
// (16, 'x_menu_quotes', 'common', 'quotes'),
// (17, 'x_menu_vendor', 'non-common', 'vendors'),
// (18, 'x_menu_purchases', 'non-common', 'purchases'),
// (19, 'x_menu_deposits', 'non-common', 'deposits'),
// (20, 'x_menu_settings', 'non-common', 'settings');


// CREATE TABLE `privileges` (
//     `relation` int(5) NOT NULL,
//     `relation_type` varchar(255) NOT NULL,
//     `permission_id` int(5) NOT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


// (1, 'staff', 3),
// (1, 'staff', 4),
// (1, 'staff', 5),
// (1, 'staff', 6),
// (1, 'staff', 7),
// (1, 'staff', 8),
// (1, 'staff', 9),
// (3, 'staff', 3),
// (15, 'contact', 1),
// (15, 'contact', 2),
// (15, 'contact', 7),
// (15, 'contact', 9),