const mongoose = require('mongoose');

// Define the schema
const roleSchema = new mongoose.Schema({
    role_id: { type: Number, required: true, unique: true },     // Primary key
    role_name: { type: String, required: true },                 // Not null VARCHAR(100)
    role_type: { type: String, required: true },                 // Not null VARCHAR(10)
    role_createdat: { type: Date, default: null },               // Nullable DATETIME
    role_updatedat: { type: Date, default: null },               // Nullable DATETIME
    created_by: { type: Number, required: true }                 // Not null INT(5)
}, { timestamps: true });  // Automatic timestamps for createdAt and updatedAt

// Export the model
const Role = mongoose.model('Role', roleSchema);
module.exports = Role


/// Sample data
// (1, 'Admin Role', 'admin', '2019-08-09 08:04:18', '2024-03-29 14:43:27', 1),
// (4, 'Niaz Sheikh', 'admin', '2024-04-11 07:35:02', '2024-04-11 07:35:02', 5);



// CREATE TABLE `role_permissions` (
//     `role_permission_id` int(5) NOT NULL,
//     `permission_id` int(5) NOT NULL,
//     `permission_view_own` tinyint(1) NOT NULL,
//     `permission_view_all` tinyint(1) NOT NULL,
//     `permission_edit` tinyint(1) NOT NULL,
//     `permission_delete` tinyint(1) NOT NULL,
//     `permission_create` tinyint(1) NOT NULL,
//     `role_id` int(5) NOT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;


/// Sample data
// (1, 1, 1, 1, 1, 1, 1, 1),
// (2, 2, 1, 1, 1, 1, 1, 1),
// (3, 3, 1, 1, 1, 1, 1, 1),
// (4, 4, 1, 1, 1, 1, 1, 1),
// (5, 5, 1, 1, 1, 1, 1, 1),
// (6, 6, 1, 1, 1, 1, 1, 1),
// (7, 7, 1, 1, 1, 1, 1, 1),
// (8, 8, 1, 1, 1, 1, 1, 1),
// (9, 9, 1, 1, 1, 1, 1, 1),