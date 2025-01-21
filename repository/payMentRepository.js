const mssql = require('mssql');
const x = require('../DB/connect');
const myAppPool = x.appPool;

const insertPayment = async (userId, officeId, cardNumber, validityMonth, CVV, createdAt) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Connect to the database
            let myConnectionPoolToDB = await myAppPool.connect();

            try {
                // Execute the stored procedure
                let results = await myConnectionPoolToDB.request()
                    .input('userId', mssql.Int, userId)
                    .input('officeId', mssql.Int, officeId)
                    .input('cardNumber', mssql.NVarChar(16), cardNumber)
                    .input('validityMonth', mssql.NVarChar(7), validityMonth)
                    .input('CVV', mssql.NVarChar(3), CVV)
                    .input('createdAt', mssql.DateTime, createdAt)
                    .execute('InsertPayment'); // Ensure the procedure name matches

                console.log('Payment inserted successfully:', results);
                resolve(results);
            } catch (err) {
                console.log("Error while executing stored procedure:", err);
                reject(err);
            }
        } catch (err) {
            console.error('Database connection error:', err);
            reject(err);
        }
    });
};

module.exports = {
    insertPayment
};
