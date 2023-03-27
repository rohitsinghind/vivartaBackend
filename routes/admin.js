const express = require('express');
const router = express.Router();
const Application = require('../models/application');


router.get('/applications', async (req,res)=>{

    try {
       
      const applications = await Application.find();
  
        res.status(201).json({
          success: true,
          message: "Application created",
          data:applications
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }

  
}) 

router.get('/verified/:email', async (req,res)=>{
    try {
      const application = await Application.findOne({email:req.params.email});
  
      if (!application) {
        return res.status(404).json({
          success: false,
          message: "Application not found",
        });
      }

      application.status = "verified";
    await application.save();
  
      res.status(201).json({
        success: true,
        message: "application approved",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
}) 

module.exports = router