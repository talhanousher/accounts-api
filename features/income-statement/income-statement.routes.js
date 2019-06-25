let express = require('express');
let router = express.Router();

let generalEntriesCtrl = require('./income-statement.ctrl');

router.route('/')
    .get(generalEntriesCtrl.getIncomeStatement);

module.exports = router;      