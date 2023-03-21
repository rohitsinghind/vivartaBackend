const express = require('express');
const router = express.Router();
const Application = require('../models/application');



//ROUTE 2 : Get all the Notes using GET  "/api/notes/addnotes" login required
router.post('/register', async (req,res)=>{

    try {
        const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
          folder: "posts",
        });
        const newPostData = {
          caption: req.body.caption,
          image: {
            public_id: myCloud.public_id,
            url: myCloud.secure_url,
          },
          owner: req.user._id,
        };
    
        const post = await Post.create(newPostData);
    
        const user = await User.findById(req.user._id);
    
        user.posts.unshift(post._id);
    
        await user.save();
        res.status(201).json({
          success: true,
          message: "Post created",
        });
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }

  
}) 

//ROUTE 3 : Update an existing Notes using PUT  "/api/notes/uodatenote" login required
// router.put('/updatenote/:id', fetchuser , async (req,res)=>{
//     const {title, description, tag} = req.body;

//     try {
//         //create a newNote object
//     const newNote = {};
//     if(title){newNote.title = title};
//     if(description){newNote.description = description};
//     if(tag){newNote.tag = tag};

//     //find the note to be updated
//     let note = await Note.findById(req.params.id);
//     if(!note){return res.status(404).send("NOt Found")}

//     if(note.user.toString() !== req.user.id){
//         return res.status(401).send("Not Allowed");
//     }

//     note = await Note.findByIdAndUpdate(req.params.id,{$set: newNote}, {new:true})
//     res.json({note});
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
    

// })

// //ROUTE 4 : Update an existing Notes using DELETE  "/api/notes/deletenote" login required
// router.delete('/deletenote/:id', fetchuser , async (req,res)=>{
//     const {title, description, tag} = req.body;
//     try {
//          //find the note to be deleted
//     let note = await Note.findById(req.params.id);
//     if(!note){return res.status(404).send("NOt Found")}

//     //allow deletion only is user owns this Note
//     if(note.user.toString() !== req.user.id){
//         return res.status(401).send("Not Allowed");
//     }

//     note = await Note.findByIdAndDelete(req.params.id)
//     res.json({"success": "Note has been deleted", note: note});
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).send("Internal Server Error");
//     }
   
   

// })

module.exports = router