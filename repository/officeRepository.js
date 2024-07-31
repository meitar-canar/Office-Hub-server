const mssql = require('mssql');
const x = require('../DB/connect')
const myAppPool = x.appPool
// ----------------------------------------------------------------------------------- 

const CreateOffice = async (officeName, location, capacity, rent_price, picture) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('officeName', mssql.NVarChar, officeName)
                    .input('location', mssql.NVarChar, location)
                    .input('capacity', mssql.Int, capacity)
                    .input('rent_price', mssql.NVarChar, rent_price)
                    .input('picture', mssql.NVarChar, picture)
                    .execute('CreateOffice')
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

module.exports.CreateOffice = CreateOffice;


// =====================================================================================
const showAllOffices = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .execute('showAllOffices')
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

module.exports.showAllOffices = showAllOffices;


// =====================================================================================
const deleteOffice = async (officeDId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('officeDId', mssql.Int, officeDId)
                    .execute('deleteOffice')
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

module.exports.deleteOffice = deleteOffice;


// =====================================================================================
const UpdateOfficeById = async (officeid, officeName, location, capacity, rent_price, picture) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('officeid', mssql.Int, officeid)
                    .input('officeName', mssql.NVarChar, officeName)
                    .input('location', mssql.NVarChar, location)
                    .input('capacity', mssql.Int, capacity)
                    .input('rent_price', mssql.NVarChar, rent_price)
                    .input('picture', mssql.NVarChar, picture)


                    .execute('UpdateOfficeById')
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

module.exports.UpdateOfficeById = UpdateOfficeById;
// ===============================================
const getOfficeById = async (theId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('theId', mssql.Int, theId)
                    .execute('getOfficeById')
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

module.exports.getOfficeById = getOfficeById;


// =====================================================================================
