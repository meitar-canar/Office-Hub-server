const jwt = require('jsonwebtoken');
const mssql = require('mssql');
const jwtExpiryTimeInMilliSeconds = 60 * 1000 * 15; // 15 min
const jwtKey = 'my_seceret_key'; // "salt"
const usersRepository = require('../repository/usersRepository');



//-------------------------------------------------
//   This Middleware will ONLY handle Requests with route starting with 
//    /secret     
const checkJwtToken = (req, res) => {
    console.log(`received Request for route starting with secret: 
                ${req.method} , ${req.url}`);

    // if the token is OK
    let isTokenOK = false;
    const theToken = req.cookies.myToken || req.body.myToken;

    // if there is no "myToken" in the cookies
    if (!theToken) {
        console.log('refresh - couldnt find "myToken" in the cookies');
        res.status(401).send();
    }

    // once we got here it means we have cookie named "myToken"
    //  let's make sure it actually also contains VALID content
    //   (make sure the jwt wasn't "played with")
    let payload;
    try {
        payload = jwt.verify(theToken, jwtKey);
        console.log(payload);
        req.tokenPayload = payload;
    }
    catch (e) {
        if (e instanceof jwt.JsonWebTokenError) {
            console.log('refresh - JsonWebTokenError', e);
            res.status(401).send();
        }
        res.status(401).send();
    }


    // Once we got here, it means, 
    // 1) There was a cookie named myToken
    // 2) it was valid (we checked the jwt validity above)
    isTokenOK = true;
    if (isTokenOK) {
        //res.send("great")
    }
    else {
        res.status(403).send();
    }

};
module.exports.checkJwtToken = checkJwtToken;
//-------------------------------------------------

const myCheckUserPasswordService = async (userName, password) => {
    console.log(`userName, password: ${userName} ${password}`);
    const X = await usersRepository.signIn(userName, password);

    if (X.recordset[0].userId) {
        return { success: true, userData: X.recordset[0] };
    }
    else {
        return { success: false };
    }

}


//=======================================================
// TODO : add more data to the respons as needed in the front
const signIn = async (req, res) => {
    const { userName, password } = req.body;
    const isPassOKAndUserData = await myCheckUserPasswordService(userName, password);
    if (!isPassOKAndUserData.success) {
        // return 401 error status, (authentication not OK)
        return res.status(401).send();
    }
    // if we got here, it means uname+pass OK
    // so, lets create a new token with the username in the payload
    //   which expires X seconds after issue
    let X = jwtExpiryTimeInMilliSeconds;
    const myToken = jwt.sign(
        isPassOKAndUserData.userData, jwtKey, { algorithm: "HS256", expiresIn: X }
    )
    console.log('signIn - created myToken: ', myToken);

    // lets add a cookie with our jwt to send to our client
    res.cookie('myToken', myToken, { maxAge: X });
    res.json({ token: myToken, userdata: isPassOKAndUserData.userData, "blessing": "be blessed" });
    //res.end();
};
//=======================================================
module.exports.signIn = signIn;
//======================================================= 