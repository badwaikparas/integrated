const mongoose = require('mongoose');

// Define the schema
const subtaskSchema = new mongoose.Schema({
    taskid: { type: Number, required: true },
    description: { type: String, required: true, maxlength: 500 },
    finished: { type: Number, required: true, default: 0 },
    created: { type: Date, required: true, default: Date.now },
    staff_id: { type: Number, required: true },
    complete: { type: Number, default: 0 }
});

// Export the model

const Subtask = mongoose.model('Subtask', subtaskSchema);
module.exports = Subtask
