let generalEntriesQueries = require('./general-entries.queries');


exports.getGeneralEntries = (req, res, next) => {
    generalEntriesQueries.generalEntriesFind({})
        .then(generalEntries => {
            return res.json({
                data: generalEntries
            });
        })
        .catch(err => {
            if (err) {
                return next(err);
            }
        });
};

exports.createGeneralEntry = async (req, res, next) => {
    let debit = req.body[0];
    let credit = req.body[1];
    try {
        let debitEntry = await generalEntriesQueries.generalEntriesCreate({ header: debit.header, debit: debit.debit });
        let creditEntry = await generalEntriesQueries.generalEntriesCreate({ header: credit.header, credit: credit.credit });
        return res.json({
            data: {
                debitEntry: debitEntry,
                creditEntry: creditEntry
            },
            success: true
        });
    } catch (error) {
        return next(error);
    }
};