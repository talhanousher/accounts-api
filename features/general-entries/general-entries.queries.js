let Boom = require('boom');

let GeneralEntries = require('./general-entries.model');

exports.generalEntriesCreate = (data) => {
    return new Promise((resolve, reject) => {
        GeneralEntries.create(data, (err, generalEntry) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(generalEntry);
        });
    });
};

exports.generalEntriesFind = (query) => {
    return new Promise((resolve, reject) => {
        GeneralEntries.find(query, (err, generalEntries) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            if (generalEntries.length === 0) {
                return reject(Boom.badImplementation('No Entries Found'));
            }
            return resolve(generalEntries);
        });
    });
};