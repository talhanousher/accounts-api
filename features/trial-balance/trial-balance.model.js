let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TrialBalance = Schema({
    data: [{
        accounttitle: {
            type: String,
            require: true
        },
        debit: {
            type: Number,
            require: true,
            default: null
        },
        credit: {
            type: Number,
            require: true,
            default: null
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
});

module.exports = mongoose.model('trial-balance', TrialBalance);