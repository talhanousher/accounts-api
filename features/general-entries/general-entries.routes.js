let express = require('express');
let router = express.Router();

let generalEntriesCtrl = require('./general-entries.ctrl');

router.route('/')
    .get(generalEntriesCtrl.getGeneralEntries)
    .post(generalEntriesCtrl.createGeneralEntry);