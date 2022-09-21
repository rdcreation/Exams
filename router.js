const express = require('express');
const router = express.Router();
const user = require('./Controller/user');
const question = require('./Controller/question');
const { validateRole } = require('./middleware');
const jwt = require('jsonwebtoken');
const auth = require('./auth');


router

    .post('/createQuestion', validateRole, question.createQuestion)
    .put('/updatequestion/:id', validateRole, question.updateQuestionbyID)
    .delete('/deleteQuestion/:id', validateRole, question.deleteQuestionbyID)
    .get('/questions', validateRole, question.getquestions)
    .get('/questions/:id', validateRole, question.getquestionsbyID)

    .post('/createUser', user.createUser)    
    .post('/login', auth.createToken)
    .get('/validateToken', auth.ensureToken)







module.exports = router;