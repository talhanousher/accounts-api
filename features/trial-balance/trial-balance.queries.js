let Boom = require('boom');

let TrialBalance = require('./trial-balance.model');

exports.trialBalanceCreate = (data) => {
    return new Promise((resolve, reject) => {
        TrialBalance.create(data, (err, trialBalance) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(trialBalance);
        });
    });
};