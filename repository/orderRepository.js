const mssql = require('mssql');
require('dotenv').config();
const x = require('../DB/connect')
const myAppPool = x.appPool
// ----------------------------------------------------------------------------------- 

const CreateOrder = async (userId, officesId, orderDate) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('userId', mssql.Int, userId)
                    .input('officesId', mssql.Int, officesId)
                    .input('orderDate', mssql.DateTime, orderDate)

                    .execute('CreateOrder')
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

module.exports.CreateOrder = CreateOrder;


// =====================================================================================
const GetOrder = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .execute('GetOrder')
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

module.exports.GetOrder = GetOrder;


// =====================================================================================
const DeleteOrder = async (orderId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('orderId', mssql.Int, orderId)
                    .execute('DeleteOrder')
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

module.exports.DeleteOrder = DeleteOrder;


// =====================================================================================
const UpdateOrder = async (orderId, userId, officesId, orderDate) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();;
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('orderId', mssql.Int, orderId)
                    .input('userId', mssql.Int, userId)
                    .input('officesId', mssql.Int, officesId)
                    .input('orderDate', mssql.DateTime, orderDate)
                    .execute('UpdateOrder')
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

module.exports.UpdateOrder = UpdateOrder;