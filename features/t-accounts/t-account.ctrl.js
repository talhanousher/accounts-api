let queries = require('./t-account.queries');

exports.createAccounts = async (req, res, next) => {
    let debit = req.body[0];
    let credit = req.body[1];
    let createdDebitedAccount;
    let createdCreditedAccount
    try {
        let debitedAccount = await queries.tAccountFindOne({ header: debit.header });
        if (!debitedAccount) {
            let data = {
                header: debit.header,
                debit: debit.debit
            }
            createdDebitedAccount = await queries.tAccountCreate(data);
        } else {
            let updatedDebitedAccount = await queries.tAccountFindOneAndUpdate({ header: debit.header }, { $set: { debit: debitedAccount.debit + debit.debit } });
            createdDebitedAccount = updatedDebitedAccount;
        }
        let creditedAccount = await queries.tAccountFindOne({ header: credit.header });
        if (!creditedAccount) {
            let data = {
                header: credit.header,
                credit: credit.credit
            }
            createdCreditedAccount = await queries.tAccountCreate(data);
        } else {
            let updatedCreditedAccount = await queries.tAccountFindOneAndUpdate({ header: credit.header }, { $set: { credit: creditedAccount.credit + credit.credit } });
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