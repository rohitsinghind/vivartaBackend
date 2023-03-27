const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://rksinghpc:rohit@cluster0.6p7vizy.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
}

module.exports = connectToMongo;