const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    proposal_id: {
        type: Number,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    customerId: {
        type: Number,
        required: true,
    },
    issueDate: {
        type: Date,
        required: true,
    },
    assignedTo: {
        type: Number,
        required: true,
    },
    statusId: {
        type: Number,
        required: true,
    },
    openTill: {
        type: Date,
        // required: true,
    },
    detail: {
        type: String,
        // required: true,
    },
    comments: {
        type: String,
    },
    amount: {
        type: Number,
        required: true,
    }
})


const Proposal = mongoose.model('Proposal', proposalSchema)

module.exports = Proposal