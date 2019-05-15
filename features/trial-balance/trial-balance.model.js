let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TrialBalance = Schema({
    data: [{
        accounttitle: {
            type: String,
            required: true
        },
        debit: {
            type: Number,
            required: true,
            default: 0
        },
        credit: {
            type: Number,
            required: true,
            default: 0
        },
        type: {
            type: String,
            enum: ["asset", "liability", "owner-equity", "expense", "revenue"],
            required: true
        }
    }],
    total: {
        debit: {
            type: Number
        },
        credit: {
            type: Number
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('trial-balance', TrialBalance);