let trialBalanceQueries = require('../trial-balance/trial-balance.queries');
let incomeStatementQueries = require('./income-statement.queries');


exports.getIncomeStatement = (req, res, next) => {
    trialBalanceQueries.trialBalanceFind({})
        .then(trialBalance => {
            return res.json({
                data: trialBalance[0].data
            });
        })
        .catch(err => {
            return next(err);
        });
};