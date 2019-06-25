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

exports.trialBalanceFind = (query) => {
    return new Promise((resolve, reject) => {
        TrialBalance.find(query, (err, trialBalance) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(trialBalance);
        });
    });
};

exports.trialBalanceFindOne = (query) => {
    return new Promise((resolve, reject) => {
        TrialBalance.findOne(query, (err, trialBalnce) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(trialBalnce);
        })
    });
};

exports.trialBalanceFindOneAndUpdate = (query, update) => {
    return new Promise((resolve, reject) => {
        TrialBalance.findOneAndUpdate(query, update, (err, trialBalance) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(trialBalance);
        });
    });
};