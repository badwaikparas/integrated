const mongoose = require('mongoose')

const accountSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: Number,
        required: true
    },
    bankName: {
        type: String,
    },
    branchbank: {
        type: String,
    },
    account: {
        type: String,
    },
    iban: {
        type: String,
    },
    status_id: {
        type: Number,
        required: true,
    }
})

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;

//  Sample Data
// (1, 'Niaz Cash', 0, '', '', '21474', '', 0),
// (3, 'Niaz Faysal Bank', 1, 'Faysal Bank', 'Faysal Bank', '3327', '', 0),
// (4, 'Niaz Jazz Cash', 1, 'Jazz Cash', 'Jazz Cash', '9090', '', 0),
// (5, 'Niaz Bank Al Flah', 1, 'Bank Al Flah', '', '3937', '', 0),
// (6, 'Saleem Cash', 0, '', '', '', '', 0),
// (7, 'Saleem Jazz Cash', 0, '', '', '', '', 0);