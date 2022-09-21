const mongoose=require('mongoose');
const connectdb = () =>
{
    mongoose.connect('mongodb://localhost:27017/Exams',{useNewUrlParser:true, useUnifiedTopology: true })
    .then(()=>{
        console.log("DataBase Connected Successfully")
    })
    .catch(err=>{
        console.log("Database connection error")
    });   
   
}

module.exports= {connectdb};