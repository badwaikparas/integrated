const mongoose = require('mongoose');

// Define the schema
const taskSchema = new mongoose.Schema({
    task_number: { type: String, default: null },
    name: { type: String, default: null },
    description: { type: String, default: null },
    priority: { type: Number, default: null },
    assigned: { type: Number, default: null },
    created: { type: Date, required: true, default: Date.now },
    startdate: { type: Date, required: true },
    duedate: { type: Date, default: null },
    datefinished: { type: Date, required: true },
    addedfrom: { type: Number, required: true },
    status_id: { type: Number, required: true, default: 0 },
    relation: { type: Number, default: null },
    relation_type: { type: String, default: null },
    public: { type: Boolean, default: false },
    billable: { type: Boolean, default: false },
    billed: { type: Boolean, default: false },
    hourly_rate: { type: mongoose.Schema.Types.Decimal128, default: 0.00 },
    milestone: { type: Number, default: 0 },
    visible: { type: Boolean, default: false },
    timer: { type: Number, default: 0 }
});

// Export the model
const Task = mongoose.model('Task', taskSchema);
module.exports = Task
