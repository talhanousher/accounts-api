let TAccount = require('./t-account.model');
let tAccountMessages = require('./t-accounts.messages');
let Boom = require('boom');

exports.tAccountFindOne = (query) => {
    return new Promise((resolve, reject) => {
        TAccount.findOne(query, (err, account) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(account);
        });
    });
}

exports.tAccountCreate = (data) => {
    return new Promise((resolve, reject) => {
        TAccount.create(data, (err, account) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(account);
        });
    });
};

exports.tAccountFindOneAndUpdate = (query, update) => {
    return new Promise((resolve, reject) => {
        TAccount.findOneAndUpdate(query, update, { new: true }, (err, account) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(account);
        });
    });
};

exports.tAccountFind = (query) => {
    return new Promise((resolve, reject) => {
        TAccount.find(query, (err, accounts) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            if (accounts.length === 0) {
                return reject(Boom.badImplementation(tAccountMessages.ERROR_FOUND));
            }
            return resolve(accounts);
        });
    });
};