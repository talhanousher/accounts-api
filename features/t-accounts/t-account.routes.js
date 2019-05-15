let express = require('express');
let router = express.Router();

let tAccountCtrl = require('./t-account.ctrl');

router.route('/')
    .get(tAccountCtrl.getAllTAccounts)
    .put(tAccountCtrl.updateAccounts)
    // .post(tAccountCtrl.createAccounts)
    .delete(tAccountCtrl.deleteAccounts);

module.exports = router;   