let TAccount = require('./t-account.model');

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