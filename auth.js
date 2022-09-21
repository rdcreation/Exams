const jwt = require('jsonwebtoken');

const createToken = (req, res, next) => {

    const { username, password, role } = req.body;
    const user = { name: username, password: password, role: role };
    const token = jwt.sign(user, 'my_secret_key', { expiresIn: "1h" });
    res.json({ token: token });
    console.log("token", token);


}

const ensureToken = (req, res, next) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader != 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;


        const refreshToken = req.token
        const responseval = jwt.verify(req.token, 'my_secret_key', (err, data) => {
            if (err) {
                console.log(err);
                res.status(403);
                res.json({ Session: "Expired" })
            }
            else {

                // let exp = data.exp;
                // if (Date.now() >= exp * 1000) {
                //     console.log("Session Expired");
                //     res.json({Session: "Expired"})
                //     return;
                // }

                res.json({
                    text: 'this is Secured',
                    data: data
                })
            }
        })
        console.log(responseval);
    }
    else {
        console.log("else")
        res.sendStatus(403);
    }
}




module.exports = { createToken, ensureToken }