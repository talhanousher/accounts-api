let tAccountQueries = require('./t-account.tAccountQueries');

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