const questionModel  = require('../Model/question');
const { validate } = require('../middleware')


const createQuestion = async function (req, res) {
    try {

        const { question, answerChoices } = req.body;
        const data =
        {
            question, answerChoices
        }

        let userResponse = await new questionModel(data);
        console.log(userResponse);
        let response = await userResponse.save();
        console.log(response);
        res.send(data);

    }
    catch (err) { console.log(err); res.send("Some error Occured while creataion of user") }
}

const updateQuestionbyID = async function (req, res) {
    try {

        const { question, answerChoices, marks } = req.body;
        const { id } = req.params;

        let questionDetails = await questionModel.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    question,
                    answerChoices,
                    marks,
                }
            }, { new: true });
        console.log(questionDetails);
        res.send(questionDetails);

    }
    catch (err) { console.log(err); res.send("Some error Occured while updating of user") }
}

const deleteQuestionbyID = async function (req, res) {
    try {


        const { id } = req.params;
        let questionDetails = await questionModel.deleteOne({ _id: id }, { new: true });
        console.log(questionDetails);
        res.send(questionDetails);
    }
    catch (err) { console.log(err); res.send("Some error Occured while updating of user") }
}

const getquestions = async function (req, res) {
    try {

        let questionDetails = await questionModel.find({})
        console.log(questionDetails);
        res.send(questionDetails);
    }
    catch (err) { console.log(err); res.send("Some error Occured while Fetch the questions") }
}
const getquestionsbyID = async function (req, res) {
    try {
        const { id } = req.params;
        let questionDetails = await questionModel.find({ _id: id })
        console.log(questionDetails);
        res.send(questionDetails);
    }
    catch (err) { console.log(err); res.send("Some error Occured while Fetch the questions") }
}

module.exports = { createQuestion, updateQuestionbyID, deleteQuestionbyID, getquestions, getquestionsbyID };