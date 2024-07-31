const mssql = require('mssql');
const x = require('../DB/connect')
const myAppPool = x.appPool


const AddContact = async (userName, email, requestDetails) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userName', mssql.NVarChar, userName)
                    .input('email', mssql.NVarChar, email)
                    .input('requestDetails', mssql.NVarChar, requestDetails)
                    .execute('AddContact')
                console.log(results);
                resolve(results);
            }
            catch (err) {
                console.log("there was an error while sending query to DB ", err);
                reject(err);
            }
        }
        catch (err) {
            console.error('ERROR CONNECTION TO DB: ', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    })
}

module.exports.AddContact = AddContact;