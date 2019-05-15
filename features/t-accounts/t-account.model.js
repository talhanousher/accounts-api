let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TAccount = Schema({
    header: {
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
}, { timestamps: true });

module.exports = mongoose.model('t-accounts', TAccount);
