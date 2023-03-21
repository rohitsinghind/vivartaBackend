const mongoose = require('mongoose')

const mongoURI = "mongodb+srv://rksinghpc:rohit@cluster0.6p7vizy.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo")
    })
}

module.exports = connectToMongo;