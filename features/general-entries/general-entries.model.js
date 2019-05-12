let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let GeneralEntries = Schema({
    header: {
        type: String,
        require: true
    },
    debit: {
        type: Number,
        require: true,
        default: 0
    },
    credit: {
        type: Number,
        require: true,
        default: 0
    }
}, { timestamps: true });

module.exports = mongoose.model("general-entries", GeneralEntries);