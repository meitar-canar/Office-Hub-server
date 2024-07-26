const mssql = require('mssql');
const x = require('../DB/connect')
const myAppPool = x.appPool


// ----------------------------------------------------------------------------------- 

const CreatingUserInfo = async (userId, firstName, lastName, address, phone) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userId', mssql.Int, userId)
                    .input('firstName', mssql.NVarChar, firstName)
                    .input('lastName', mssql.NVarChar, lastName)
                    .input('address', mssql.NVarChar, address)
                    .input('phone', mssql.NVarChar, phone)
                    .execute('CreatingUserInfo')
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

module.exports.CreatingUserInfo = CreatingUserInfo;


// =====================================================================================
const showAllUsersInfo = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .execute('showAllUsersInfo')
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

module.exports.showAllUsersInfo = showAllUsersInfo;


// =====================================================================================
const deleteUserInfo = async (userDId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userDId', mssql.Int, userDId)
                    .execute('deleteUserInfo')
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

module.exports.deleteUserInfo = deleteUserInfo;


// =====================================================================================
const UpdateUserInfoById = async (userDId, userId, firstName, lastName, address, phone) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userDId', mssql.Int, userDId)
                    .input('userId', mssql.Int, userId)
                    .input('firstName', mssql.NVarChar, firstName)
                    .input('lastName', mssql.NVarChar, lastName)
                    .input('address', mssql.NVarChar, address)
                    .input('phone', mssql.NVarChar, phone)
                    .execute('UpdateUserInfoById')
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

module.exports.UpdateUserInfoById = UpdateUserInfoById;

// =====================================================================================


