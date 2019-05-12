let express = require('express');
let router = express.Router();

let trialBalanceCtrl = require('./trial-balance.ctrl');

router.route('/')
    .get(trialBalanceCtrl.getTrialBalance);

module.exports = router; 