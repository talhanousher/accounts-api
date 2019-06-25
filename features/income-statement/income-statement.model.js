let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let IncomeStatement = Schema({
    revenues: [{
        title: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        }
    }],
    expenses: [{
        title: {
            type: String,
            required: true
        },
        amount: {
            type: String,
            required: true
        }
    }]
}, { timestamps: true });

module.exports = mongoose.model('income-statement', IncomeStatement);