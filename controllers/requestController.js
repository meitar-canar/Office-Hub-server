const requestRepository = require('../repository/requestRepository');
const jwt = require('jsonwebtoken');
const jwtKey = process.env.JWT_KEY; //salt word
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min

// ========================================================================================================
const AddContact = (async (req, res) => {
    try {
        let x = await requestRepository.AddContact(req.body.userName, req.body.email, req.body.requestDetails);
        console.log('Router got data from requestRepository', x);
        res.json(x);
    }
    catch (err) {
        console.log(err);
        // res.json('there was an error while calling usersRepository.AddContact()', err);
    }
})
module.exports.AddContact = AddContact;