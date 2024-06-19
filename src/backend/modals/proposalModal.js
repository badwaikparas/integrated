const mongoose = require('mongoose');


const proposalSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    proposal_number: { type: String, default: null },
    token: { type: String, required: true },
    subject: { type: String, default: null },
    content: { type: String, default: null },
    customer_quote: { type: String, default: null },
    date: { type: Date, required: true },
    created: { type: Date, required: true },
    opentill: { type: Date, default: null },
    relation_type: { type: String, default: null },
    relation: { type: Number, default: null },
    assigned: { type: Number, default: null },
    addedfrom: { type: Number, required: true },
    datesend: { type: Date, default: null },
    comment: { type: Number, default: null },
    status_id: { type: Number, required: true, default: 0 },
    invoice_id: { type: Number, default: null },
    project_id: { type: Number, default: null },
    dateconverted: { type: Date, default: null },
    sub_total: { type: mongoose.Types.Decimal128, default: null },
    total_discount: { type: mongoose.Types.Decimal128, default: null },
    total_tax: { type: mongoose.Types.Decimal128, default: null },
    total: { type: mongoose.Types.Decimal128, default: null },
    is_requested: { type: Boolean, default: false },
    pdf_status: { type: Boolean, default: false }
}, { timestamps: true });

const Proposal = mongoose.model("Proposal", proposalSchema)
module.exports = Proposal
