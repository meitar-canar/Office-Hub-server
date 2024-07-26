const mssql = require('mssql');
const x = require('../DB/connect');
const myAppPool = x.appPool;


const createEvent = async (title, startDate, endDate, userId, officesId, allDay) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('title', mssql.VarChar, title)
                    .input('startDate', mssql.DateTime, startDate)
                    .input('endDate', mssql.DateTime, endDate)
                    .input('userId', mssql.Int, userId)
                    .input('officesId', mssql.Int, officesId)
                    .input('allDay', mssql.Bit, allDay)
                    .execute('createEvent');
                resolve(results);
            } catch (err) {
                console.error("Error executing createEvent", err);
                reject(err);
            }
        } catch (err) {
            console.error('Error connecting to DB', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    });
};

module.exports = {
    createEvent
};

// =================================================================================

const getEventsByRoomId = async (theId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('theId', mssql.Int, theId)
                    .execute('getEventsByRoomId');
                resolve(results);
            } catch (err) {
                console.error("Error executing createEvent", err);
                reject(err);
            }
        } catch (err) {
            console.error('Error connecting to DB', err);
            reject('ERROR CONNECTION TO DB: ', err);
        }
    });
};

const getEvents = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request().execute('getEvents');
                resolve(results.recordset);
            } catch (err) {
                console.error("Error executing getEvents", err);
                reject(err);
            }
        } catch (err) {
            console.error('Error connecting to DB', err);
            reject(err);
        }
    });
};

// Get Event By ID
const getEventById = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('id', mssql.Int, id)
                    .execute('GetEventById');
                resolve(results.recordset[0]);
            } catch (err) {
                console.error("Error executing GetEventById", err);
                reject(err);
            }
        } catch (err) {
            console.error('Error connecting to DB', err);
            reject(err);
        }
    });
};

// Update Event
const updateEvent = async (event) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('id', mssql.Int, event.id)
                    .input('title', mssql.NVarChar, event.title)
                    .input('startDate', mssql.DateTime, event.startDate)
                    .input('endDate', mssql.DateTime, event.endDate)
                    .input('userId', mssql.Int, event.userId)
                    .input('officesId', mssql.Int, event.officesId)
                    .execute('UpdateEvent');
                resolve(results);
            } catch (err) {
                console.error("Error executing UpdateEvent", err);
                reject(err);
            }
        } catch (err) {
            console.error('Error connecting to DB', err);
            reject(err);
        }
    });
};

// Delete Event
const deleteEvent = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let myConnectionPoolToDB = await myAppPool.connect();
            try {
                let results = await myConnectionPoolToDB.request()
                    .input('id', mssql.Int, id)
                    .execute('DeleteEvent');
                resolve(results);
            } catch (err) {
                console.error("Error executing DeleteEvent", err);
                reject(err);
            }
        } catch (err) {
            console.error('Error connecting to DB', err);
            reject(err);
        }
    });
};

module.exports = {
    createEvent,
    getEvents,
    getEventById,
    updateEvent,
    deleteEvent,
    getEventsByRoomId
};

