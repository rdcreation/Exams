const express = require('express');
const router = express.Router();
const user = require('./Controller/user');
const question = require('./Controller/question');
const { validateRole } = require('./middleware');
const jwt = require('jsonwebtoken');
const auth = require('./auth');


router

    .post('/createQuestion',auth.ensureToken, validateRole, question.createQuestion)
    .put('/updatequestion/:id',auth.ensureToken, validateRole, question.updateQuestionbyID)
    .delete('/deleteQuestion/:id',auth.ensureToken, validateRole, question.deleteQuestionbyID)
    .get('/questions', validateRole,auth.ensureToken, question.getquestions)
    .get('/questions/:id',auth.ensureToken, validateRole, question.getquestionsbyID)

    .post('/createUser', user.createUser)    
    .post('/login', auth.createToken)
    .get('/validateToken', auth.ensureToken)







module.exports = router;