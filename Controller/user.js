const  uesModel  = require('../Model/user');


const createUser = async function (req, res) {
  try {


    const { username, password, role } = req.body;
    const data =
    {
      username, password, role
    }
    console.log(data);
    let userResponse = await new uesModel(data);
    console.log(userResponse);
    let response = await userResponse.save();
    console.log(response);
    res.send(response);

  }
  catch (err) { console.log(err);res.status(400); res.send({error:"User already exits"}) }
}

module.exports = { createUser };