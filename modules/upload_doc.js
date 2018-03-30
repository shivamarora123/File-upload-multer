const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const config=require('../system/config');
mongoose.connect(config.settings.mlab);
const multer=require('multer');
// documents schema
const Document=require('../models/documents')

const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
    cb(null,'./uploads/');
  },
filename:(req,file,cb)=>{
//    console.log(req.file);
    //error on reading (file.originalname)
    cb(null,new Date().toISOString()+ file.originalname);
  }
});

const upload=multer({storage:storage});

router.post('/',upload.single('documentImage'),(req,res,next)=>{
//console.log(req.file);


   const documents=new Document({
     documentImage:req.file.path
   });
   documents.save().then(result=>{
     console.log(result);
     res.status(201).json(result);
   }).catch(err=>{
     console.log(err);
     res.status(500).json(err);
   });

});
module.exports=router;
