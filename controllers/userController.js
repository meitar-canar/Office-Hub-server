const usersRepository = require('../repository/usersRepository');
const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_KEY; //salt word
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min



const showAllUsers = (async (req, res) => {
    try {
        const users = await usersRepository.showAllUsers();
        console.log('Router got data from userRepository', users);
        res.status(200).json({ recordset: users.recordset });
    } catch (err) {
        console.log('Error while calling showAllUsers()', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
// ----------------------------------------------------------------------------------------------------------------------------------

const createUser = (async (req, res) => {
    try {
        let x = await usersRepository.createUser(req.body.userName, req.body.password, req.body.email, req.body.uroleId);
        console.log('Router got data from usersRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log(err);
        // res.json('there was an error while calling usersRepository.createUser()', err);
    }
})
module.exports.createUser = createUser;
// ----------------------------------------------------------------------------------------------------------------------------------
const UpdateUsersById = async (req, res) => {
    try {
        const result = await usersRepository.UpdateUsersById(req.body.userName, req.body.password, req.body.email, req.body.uroleId, req.params.userId);
        console.log('Router got data from userRepository', result);
        res.status(200).json(result);
    } catch (err) {
        console.log('Error while calling UpdateUsersById()', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
// ---------------------------------------------------------------------------------------------------------------------------------- 
const deleteUser = (async (req, res) => {
    try {
        let x = await usersRepository.deleteUser(req.params.userId)
        console.log('Router got data from usersRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log('there was an error while calling usersRepository.deleteUser()', err);

    }
});
module.exports.deleteUser = deleteUser;
//===========================================================================
const secrtUsers = (async (req, res) => {
    try {
        const users = await usersRepository.secrtUsers();
        console.log('Router got data from userRepository', users);
        res.status(200).json(users);
    } catch (err) {
        console.log('Error while calling secrtUsers()', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})


// ----------------------------------------------------------------------------------------------------------------------------------

const addNewUser = (async (req, res) => {
    try {
        let x = await usersRepository.addNewUser(req.body.userName, req.body.password, req.body.email, req.body.uroleId, req.body.firstName, req.body.lastName, req.body.address, req.body.phone);
        console.log('Router got data from usersRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log(err);
        // res.json('there was an error while calling usersRepository.addNewUser()', err);
    }
})
module.exports.addNewUser = addNewUser;

// ========================================================================================================
module.exports = {
    showAllUsers,
    createUser,
    UpdateUsersById,
    deleteUser,
    addNewUser,
    secrtUsers,
};