const detailRepository = require('../repository/detailRepository');
const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_KEY; //salt word
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min

const showAllUsersInfo = (async (req, res) => {
    try {
        const users = await detailRepository.showAllUsersInfo();
        console.log('Router got data from detailRepository', users);
        res.status(200).json(users);
    } catch (err) {
        console.log('Error while calling showAllUsersInfo()', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports.showAllUsersInfo = showAllUsersInfo;
// ----------------------------------------------------------------------------------------------------------------------------------

const CreatingUserInfo = (async (req, res) => {
    try {
        let x = await detailRepository.CreatingUserInfo(req.params.userId, req.body.firstName, req.body.lastName, req.body.address, req.body.phone);
        console.log('Router got data from myRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log(err);
        // res.json('there was an error while calling myRepository.CreatingUserInfo()', err);
    }
})
module.exports.CreatingUserInfo = CreatingUserInfo;
// ----------------------------------------------------------------------------------------------------------------------------------
const UpdateUserInfoById = async (req, res) => {
    try {
        const result = await detailRepository.UpdateUserInfoById(req.params.userDId, req.body.userId, req.body.firstName, req.body.lastName, req.body.address, req.body.phone);
        console.log('Router got data from userRepository', result);
        res.status(200).json(result);
    } catch (err) {
        console.log('Error while calling UpdateUserInfoById()', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports.UpdateUserInfoById = UpdateUserInfoById;
// ----------------------------------------------------------------------------------------------------------------------------------
const deleteUserInfo = (async (req, res) => {
    try {
        let x = await detailRepository.deleteUserInfo(req.params.userDId)
        console.log('Router got data from detailRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log('there was an error while calling detailRepository.deleteUserInfo()', err);

    }
});
module.exports.deleteUserInfo = deleteUserInfo;
// ========================================================================================================
const secretUsers = (async (req, res) => {
    try {
        const users = await detailRepository.secretUsers();
        console.log('Router got data from detailRepository', users);
        res.status(200).json(users);
    } catch (err) {
        console.log('Error while calling showAllUsersInfo()', err);
        res.status(500).json({ error: 'Internal server error' });
    }
})
module.exports.secretUsers = secretUsers;

// ========================================================================================================

