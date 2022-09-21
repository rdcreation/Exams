const Joi = require('joi');
const question = require('./Model/question');




// const validateQuestion = Joi.object({
//     question: Joi.string()
//         .required(),
//     answerChoices: [
//         Joi.string()
//             .required()],
//     marks: Joi.number(),
//     role: Joi.string()
//         .required()
// })
//     .with('question', 'answerChoices', 'role');

// validateQuestion.validate({ username: 'abc', birth_year: 1994 });
// schema.validate({});

// module.exports = { validateQuestion }


// try {
//     const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
// }
// catch (err) { }


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