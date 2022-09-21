const { Schema } = require('mongoose');

const answerSchema = new Schema({
    
    answerBody: [{
        type: String,
        minlength: 1,
        maxlength: 200,
    }]
}, {
    _id: false
});


module.exports = { answerSchema };