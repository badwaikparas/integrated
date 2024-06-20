const mongoose = require('mongoose');

// Define the schema
const ticketSchema = new mongoose.Schema({
    ticket_number: { type: String, default: null },
    contact_id: { type: Number, required: true, default: 0 },
    customer_id: { type: Number, required: true },
    email: { type: String, default: null },
    department_id: { type: Number, required: true },
    priority: { type: String, enum: ['1', '2', '3'], required: true },
    status_id: { type: String, enum: ['1', '2', '3', '4'], required: true },
    relation: { type: String, default: null },
    relation_id: { type: Number, default: null },
    subject: { type: String, required: true },
    message: { type: String, default: null },
    date: { type: Date, required: true, default: Date.now },
    lastreply: { type: Date, default: null },
    attachment: { type: String, default: null },
    staff_id: { type: Number, default: 0 }
});
// Export the model
const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket


// CREATE TABLE`ticketreplies`(
//     `id` int(11) NOT NULL,
//     `ticket_id` int(11) NOT NULL,
//     `staff_id` int(11) DEFAULT NULL,
//     `name` varchar(255) NOT NULL,
//     `contact_id` int(11) NOT NULL DEFAULT 0,
//     `date` datetime NOT NULL,
//     `message` text DEFAULT NULL,
//     `attachment` varchar(255) DEFAULT NULL
// ) ENGINE = InnoDB DEFAULT CHARSET = utf8mb3 COLLATE = utf8mb3_general_ci;


// CREATE TABLE `ticketstatus` (
//     `id` int(11) NOT NULL,
//     `name` varchar(50) NOT NULL,
//     `color` varchar(10) DEFAULT '#28B8DA	'
//   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;