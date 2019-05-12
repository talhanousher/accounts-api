let tAccountQueries = require('./t-account.queries');
let tAccountsMessage = require('./t-accounts.messages');

exports.getAllTAccounts = (req, res, next) => {
    tAccountQueries.tAccountFind({})
        .then(accounts => {
            return res.json({
                data: accounts,
                success: true
            })
        })
        .catch(err => {
            return next(err);
        });
};

exports.updateAccounts = (req, res) => {
    return res.json({
        message: tAccountsMessage.UPDATE_NOT_SUPPORTED
    });
};

exports.createAccounts = async (req, res, next) => {
    let debit = req.body[0];
    let credit = req.body[1];
    let createdDebitedAccount;
    let createdCreditedAccount
    try {
        let debitedAccount = await tAccountQueries.tAccountFindOne({ header: debit.header });
        if (!debitedAccount) {
            let data = {
                header: debit.header,
                debit: debit.debit
            }
            createdDebitedAccount = await tAccountQueries.tAccountCreate(data);
        } else {
            let updatedDebitedAccount = await tAccountQueries.tAccountFindOneAndUpdate({ header: debit.header }, { $set: { debit: debitedAccount.debit + debit.debit } });
            createdDebitedAccount = updatedDebitedAccount;
        }
        let creditedAccount = await tAccountQueries.tAccountFindOne({ header: credit.header });
        if (!creditedAccount) {
            let data = {
                header: credit.header,
                credit: credit.credit
            }
            createdCreditedAccount = await tAccountQueries.tAccountCreate(data);
        } else {
            let updatedCreditedAccount = await tAccountQueries.tAccountFindOneAndUpdate({ header: credit.header }, { $set: { credit: creditedAccount.credit + credit.credit } });
            createdCreditedAccount = updatedCreditedAccount;
        }
        return res.json({
            data: {
                createdDebitedAccount: createdDebitedAccount,
                createdCreditedAccount: createdCreditedAccount
            }
        });
    } catch (error) {
        return next(error);
    }
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