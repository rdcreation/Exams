const Joi = require('joi');
const question = require('./Model/question');





const validateRole = (req, res , next) => {

    const { role } = req.query;
    console.log("Received",role);
    if (role == "admin" || role == "staff") {
        next();
    }
    else {
        res.status(403);
        res.send({statusCode:403,message:"Access Denied for this Role"});
        return ;
    }
}

module.exports = { validateRole};