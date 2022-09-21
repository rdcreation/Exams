const mongoose = require('mongoose');
//const { answerSchema } = require('./answer')
const { Schema, model } = mongoose;

const questionSchmea = new Schema(
    {
        question: {
            type: String,
            minlength: 10,
            maxlength: 1000
        },
        answerChoices: [{
            type: String,
            minlength: 1,
            maxlength: 200,
            default: undefined
        }],
        marks: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

module.exports = model("question", questionSchmea);