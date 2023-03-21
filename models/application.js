const mongoose = require('mongoose');  
const { Schema } = mongoose;

const ApplicationSchema = new Schema({
    RegNo:{
        type:String,
    },
 name:{
     type:String,
     required: [true, "Please enter your name"]
 },
 email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: [true, "Email already exists"],
  },
  phoneNo: {
    type: String,
    required: [true, "Please enter your mobile number"],
    unique: [true, "Email already exists"],
  },
 college:{
     type:String,
     required: [true, "Please enter your college name"],
 },
 event:[
    {
      name: {
        type: String,
        required: true,
      },
    },
  ],
 utr:{
    type:String,
     required: [true, "Please enter your UTR number"],
 },
 paymentImage: {
    public_id: String,
    url: String,
  },
  status:{
    type: String,
    default:"pending"
  },
 createdAt:{
     type:Date,
     default:Date.now
 },
});

module.exports = mongoose.model('application',ApplicationSchema); 