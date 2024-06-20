const mongoose = require('mongoose');

// Define the schema
const fileSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },          // Primary key
    relation_type: { type: String, required: true },             // Not null VARCHAR(100)
    relation: { type: Number, default: null },                   // Nullable INT(5)
    file_name: { type: String, required: true },                 // Not null VARCHAR(255)
    is_old: { type: Boolean, default: true },                    // Default TINYINT(1) converted to BOOLEAN
    filetype: { type: String, default: null },                   // Nullable VARCHAR(50)
    created: { type: Date, required: true }                      // Not null DATETIME
});

// Export the model
const File = mongoose.model('File', fileSchema);
module.exports = File


// (2, 'project', 11, 'Document.pdf', 1, '.doc', '2017-11-04 00:00:00'),
// (6, 'project', 11, 'Chaim.doc', 1, '.doc', '2017-11-04 00:00:00'),
// (8, 'project', 9, 'Sample_File2.png', 1, NULL, '2017-11-16 01:48:03'),
// (9, 'task', 25, 'Sample_File3.png', 1, NULL, '2017-11-23 21:28:35'),
// (10, 'task', 25, 'ticket.png', 1, NULL, '2017-11-23 21:29:10'),
// (11, 'task', 27, 'Sample_File4.png', 1, NULL, '2017-11-23 23:16:21'),
// (12, 'task', 30, 'Sample_File5.png', 1, NULL, '2017-11-23 23:43:52'),
// (16, 'task', 2, '1_9PnPjPI65fGwLiMfluVLrw.jpg', 0, NULL, '2019-04-15 19:22:00');