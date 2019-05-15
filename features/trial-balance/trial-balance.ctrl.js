let tAccountQueries = require('../t-accounts/t-account.queries');
let trialBalanceQueries = require('./trial-balance.queries');

exports.getTrialBalance = (req, res, next) => {
    tAccountQueries.tAccountFind({})
        .then(accounts => {
            let data = []
            for (let i = 0; i < accounts.length; i++) {
                let dataObject = {};
                let account = accounts[i];
                dataObject.accounttitle = account.header;
                dataObject.type = account.type;
                if ((account.debit - account.credit) > 0) {
                    dataObject.debit = account.debit - account.credit;
                } else {
                    dataObject.credit = account.credit - account.debit;
                }
                data.push(dataObject);
            }
            let totalCredit = 0;
            let totalDebit = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].credit) {
                    totalCredit += data[i].credit;
                } else {
                    totalDebit += data[i].debit
                }
            }
            total = {
                debit: totalDebit,
                credit: totalCredit
            }
            let trialBalance = {
                data: data,
                total: total
            }
            trialBalanceQueries.trialBalanceCreate(trialBalance)
                .then(createdTrialBalance => {
                    return res.json({
                        data: createdTrialBalance,
                    });
                })
                .catch(err => {
                    return next(err);
                });
        })
        .catch(err => {
            return next(err);
        });
};