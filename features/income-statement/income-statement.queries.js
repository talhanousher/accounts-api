let IncomeStatement = require('./income-statement.model');
let Boom = require('boom');

exports.incomeStatementCreate = (data) => {
    return new Promise((resolve, reject) => {
        IncomeStatement.create(data, (err, incomeStatement) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(incomeStatement);
        });
    });
};

exports.incomeStatementFindOneAndUpdate = (query, update) => {
    return new Promise((resolve, reject) => {
        IncomeStatement.findOneAndUpdate(query, update, (err, incomeStatement) => {
            if (err) {
                return reject(Boom.badImplementation(err));
            }
            return resolve(incomeStatement);
        });
    });
};  