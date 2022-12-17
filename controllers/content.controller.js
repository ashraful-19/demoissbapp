const contentdb = require("../models/content.model");
const express = require ("express");
const bodyParser = require ("body-parser");
const { all } = require("../routes/dashboard.route");
const app = express ();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());





const ppdtAddAdmin = async (req, res) => {
  

  try {
    console.log(req.body);
    const newQuestion = new contentdb({
      type: req.body.type,
      title: req.body.title,
      link: req.body.qname,
      
    });
    await newQuestion.save();
    
      res.redirect('/ppdt/video');
    
    } 
    catch (error) {
    console.log(error.message);
    res.redirect("/ppdt/video");
  }};


  const ppdtShowVideoAdmin = async (req, res) => {
  

    try {
      
      const allQuestion = contentdb.find({}, function (err, content) {
        if (err) return next(err);
      //  console.log(content);
      res.render('profile_user',{content: content});
        })
  
       
      
      } 
      catch (error) {
      console.log(error.message);
      res.redirect("/admin");
    }};
  

    const ppdtShowVideoUser = async (req, res) => {
  

      try {
        
        const allQuestion = contentdb.find({}, function (err, content) {
          if (err) return next(err);
        //  console.log(content);
        res.render('ppdt/ppdt_video',{content: content});
          })
    
         
        
        } 
        catch (error) {
        console.log(error.message);
        res.redirect("/admin");
      }};
    
  

  


module.exports = {
  
  ppdtAddAdmin,
  ppdtShowVideoAdmin,
  ppdtShowVideoUser
};



