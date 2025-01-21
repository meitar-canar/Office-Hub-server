const jwt = require('jsonwebtoken');
const mssql = require('mssql');
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min
const jwtKey = 'my_seceret_key'; // "salt"
const usersRepository = require('../repository/usersRepository');

// Middleware to check JWT token
const checkJwtToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1] || req.cookies['myToken'];

    if (!token) {
        return res.status(401).json({ message: 'To book an office you need to log in to the website' });
    }

    jwt.verify(token, jwtKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'To book an office you need to log in to the website' });
        }
        req.tokenPayload = decoded;
        next();
    });
};

// =============================================================================
// Sign-in function
const signIn = async (req, res) => {
    const { userName, password } = req.body;
    const isPassOKAndUserData = await myCheckUserPasswordService(userName, password);
    if (!isPassOKAndUserData.success) {
        return res.status(401).send();
    }

    let X = jwtExpiryTimeInMilliSeconds;
    const myToken = jwt.sign(
        isPassOKAndUserData.userData, jwtKey, { algorithm: "HS256", expiresIn: X }
    );

    res.cookie('myToken', myToken, { maxAge: X });
    res.json({ token: myToken, userdata: isPassOKAndUserData.userData, "blessing": "be blessed" });
};

const myCheckUserPasswordService = async (userName, password) => {
    const X = await usersRepository.signIn(userName, password);

    if (X.recordset[0].userId) {
        return { success: true, userData: X.recordset[0] };
    } else {
        return { success: false };
    }
};

module.exports = {
    checkJwtToken,
    signIn
};
