let tAccountQueries = require('./t-account.queries');
let generalEntriesQueries = require('../general-entries/general-entries.queries');
let tAccountsMessage = require('./t-accounts.messages');

// exports.getAllTAccounts = (req, res, next) => {
//     tAccountQueries.tAccountFind({})
//         .then(accounts => {
//             return res.json({
//                 data: accounts,
//                 success: true
//             })
//         })
//         .catch(err => {
//             return next(err);
//         });
// };

exports.updateAccounts = (req, res) => {
    return res.json({
        message: tAccountsMessage.UPDATE_NOT_SUPPORTED
    });
};

exports.getAllTAccounts = async (req, res, next) => {
    generalEntriesQueries.generalEntriesFind({})
        .then(async generalEntries => {
            for (let i = 0; i < generalEntries.length; i++) {
                let generalEntry = generalEntries[i];
                try {
                    let tAccount = await tAccountQueries.tAccountFindOne({ header: generalEntry.header });
                    if (tAccount) {
                        await tAccountQueries.tAccountFindOneAndUpdate({ header: generalEntry.header }, { $set: { debit: tAccount.debit + generalEntry.debit, credit: tAccount.credit + generalEntry.credit } });
                    } else {
                        await tAccountQueries.tAccountCreate({ header: generalEntry.header, debit: generalEntry.debit, credit: generalEntry.credit, type: generalEntry.type });
                    }
                } catch (error) {
                    return next(error);
                };
            }
            tAccountQueries.tAccountFind({})
                .then(accounts => {
                    return res.json({
                        data: accounts
                    });
                })
                .catch(err => {
                    return next(err);
                })
        })
        .catch(err => {
            return next(err);
        })
};

exports.deleteAccounts = (req, res, next) => {
    tAccountQueries.tAccountRemove({})
        .then(response => {
            return res.json({
                data: response,
                success: true
            })
        })
        .catch(err => {
            return next(err);
        })
};
