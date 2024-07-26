const mssql = require('mssql');
const x = require('../DB/connect')
const myAppPool = x.appPool

// ----------------------------------------------------------------------------------- 

const createUser = async (userName, password, email, uroleId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userName', mssql.NVarChar, userName)
                    .input('password', mssql.NVarChar, password)
                    .input('email', mssql.NVarChar, email)
                    .input('uroleId', mssql.Int, uroleId)
                    .execute('createUser')
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

module.exports.createUser = createUser;


// =====================================================================================
const showAllUsers = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .execute('showAllUsers')
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

module.exports.showAllUsers = showAllUsers;


// =====================================================================================
const deleteUser = async (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userId', mssql.Int, userId)
                    .execute('deleteUser')
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

module.exports.deleteUser = deleteUser;


// =====================================================================================
const UpdateUsersById = async (userName, password, email, uroleId,) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect()
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userName', mssql.NVarChar, userName)
                    .input('password', mssql.NVarChar, password)
                    .input('email', mssql.NVarChar, email)
                    .input('uroleId', mssql.Int, uroleId)
                    .input('userId', mssql.Int, userId)

                    .execute('updateUserById')
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

module.exports.UpdateUsersById = UpdateUsersById;

// -----------------------------------------------------------------------------------


const signIn = async (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userName', mssql.NVarChar, userName)
                    .input('password', mssql.NVarChar, password)
                    .execute('signIn')
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

module.exports.signIn = signIn;
// ----------------------------------------------------------------------------------- 

const getUserInfoForLogin = async (userName, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userName', mssql.NVarChar, userName)
                    .input('password', mssql.NVarChar, password)
                    .execute('getUserInfoForLogin')
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

module.exports.getUserInfoForLogin = getUserInfoForLogin;

//====================================================================================
const addNewUser = async (userName, password, email, uroleId, firstName, lastName, address, phone) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userName', mssql.NVarChar, userName)
                    .input('password', mssql.NVarChar, password)
                    .input('email', mssql.NVarChar, email)
                    .input('uroleId', mssql.Int, uroleId)
                    .input('firstName', mssql.NVarChar, firstName)
                    .input('lastName', mssql.NVarChar, lastName)
                    .input('address', mssql.NVarChar, address)
                    .input('phone', mssql.NVarChar, phone)
                    .execute('addNewUser')
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

module.exports.addNewUser = addNewUser;