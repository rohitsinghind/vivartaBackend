const express = require('express');
const router = express.Router();
const Application = require('../models/application');


router.post('/register', async (req,res)=>{

    try {
        // const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
        //   folder: "posts",
        // });
        const newApplicationData = {
          RegNo: 1234,
          name: req.body.name,
          email: req.body.email,
          phoneNo: req.body.phoneNo,
          college: req.body.college,
          event: req.body.event,
          utr: req.body.utr,
          // paymentImage: {
          //   public_id: myCloud.public_id,
          //   url: myCloud.secure_url,
          // },
          
        };
    
        const application = await Application.create(newApplicationData);
    
  
        res.status(201).json({
          success: true,
          message: "Application created",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }

  
}) 

router.get('/status/:email', async (req,res)=>{
    try {
      const application = await Application.findOne({email:req.params.email});
  
      if (!application) {
        return res.status(404).json({
          success: false,
          message: "Application not found",
        });
      }
  
      res.status(201).json({
        success: true,
        data:application,
        message: "Application found",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }


}) 

module.exports = router