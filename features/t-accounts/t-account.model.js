let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TAccount = Schema({
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

module.exports = mongoose.model('TAccount', TAccount);
