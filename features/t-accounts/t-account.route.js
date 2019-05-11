let express = require('express');
let router = express.Router();

let tAccountCtrl = require('./t-account.ctrl');

router.route('/')
    .post(tAccountCtrl.createAccounts);

module.exports = router;   