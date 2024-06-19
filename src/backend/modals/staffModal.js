const mongoose = require('mongoose');

// Define the schema
const staffSchema = new mongoose.Schema({
    staff_number: { type: String, default: null },
    role_id: { type: Number, required: true },
    language: { type: String, required: true },//
    staffname: { type: String, default: null },//
    staffavatar: { type: String, default: 'n-img.jpg' },
    department_id: { type: Number, required: true },
    phone: { type: String, default: null },//
    address: { type: String, default: null },//
    email: { type: String, default: null },//
    birthday: { type: Date, default: null },
    password: { type: String, required: true },//
    root: { type: Boolean, default: null },
    admin: { type: Boolean, default: null },
    staffmember: { type: Boolean, default: null },
    other: { type: Boolean, default: null },
    last_login: { type: Date, required: true },
    timezone: { type: String, default: null },//
    appointment_availability: { type: Number, required: true },
    inactive: { type: Boolean, default: null },
    google_calendar_enable: { type: Number, required: true },
    google_calendar_id: { type: String, required: true },
    google_calendar_api_key: { type: String, required: true },
    createdat: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: null }
});

// Create the model
const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff




/// Sample Data
// (1, NULL, 1, 'english', 'Lance Bogrol', 'pm.jpg', 1, '+1-202-555-0160', '71 Pilgrim Avenue Chevy Chase, MD 20815', 'lance@example.com', '1992-12-05', 'fe01ce2a7fbac8fafaed7c982a04e229', NULL, 1, NULL, NULL, '2017-08-05 03:02:42', NULL, 1, NULL, 0, 'abaris@sdf.net', 'AIzaSyA1sWdokA3dVTzk7gNN58NztVw3kbPhJX8', NULL, NULL),
// (2, NULL, 0, 'english', 'Emma Durst', 'emma.jpg', 2, '+1-202-555-0158', '70 Bowman St. South Windsor, CT 06074', 'emma@example.com', '2017-07-03', 'fe01ce2a7fbac8fafaed7c982a04e229', NULL, NULL, 1, NULL, '0000-00-00 00:00:00', NULL, 1, NULL, 0, '', '', NULL, NULL),
// (3, NULL, 0, 'english', 'Guy Mann', 'guy.jpg', 4, '+1-202-555-0129', '123 6th St. Melbourne, FL 32904', 'guy@example.com', '1992-12-05', 'fe01ce2a7fbac8fafaed7c982a04e229', NULL, NULL, 1, 1, '0000-00-00 00:00:00', NULL, 0, NULL, 0, '', '', NULL, NULL),
// (4, NULL, 0, 'english', 'Ruby Von Rails', 'ruby.jpg', 3, '+1-202-555-0143', '4 Goldfield Rd. Honolulu, HI 96815', 'ruby@example.com', '1992-12-05', 'fe01ce2a7fbac8fafaed7c982a04e229', NULL, NULL, 1, NULL, '0000-00-00 00:00:00', NULL, 0, NULL, 0, '', '', NULL, NULL),
// (5, 'STAFF-5', 1, 'english', 'Admin', 'FB_IMG_16807076318521974.jpg', 1, '+918583019463', 'Root street', 'admin@gmail.com', '2019-04-16', 'e10adc3949ba59abbe56e057f20f883e', NULL, 1, NULL, NULL, '0000-00-00 00:00:00', 'Asia/Karachi', 0, NULL, 0, '', '', NULL, NULL),
// (6, 'STAFF-6', 1, 'english', 'Saleem', 'n-img.jpg', 5, '', '', 'Saleem@gmail.com', NULL, 'd54d1702ad0f8326224b817c796763c9', NULL, 1, NULL, NULL, '0000-00-00 00:00:00', 'Europe/Brussels', 0, NULL, 0, '', '', NULL, NULL);


// CREATE TABLE `staff_work_plan` (
//     `id` int(11) NOT NULL,
//     `staff_id` int(11) NOT NULL,
//     `work_plan` text NOT NULL
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;