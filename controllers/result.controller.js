const iqdata = require("../models/dashboard.model");
const express = require ("express");
const bodyParser = require ("body-parser");
const { all } = require("../routes/dashboard.route");
const app = express ();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());






const iqadmin = async (req, res) => {
  try {
    const allQuestion = iqdata.find({}, function (err, content) {
      if (err) return next(err);
    //  console.log(content);
    res.render('dashboard/iq_admin',{content: content});
      })

  } catch (error) {
    res.status(500).send(error.message);
  }
};

const iq_save = async (req, res) => {
  
  if(req.file){
    try {
      console.log(req.body);
      console.log(req.file);
      
        
      const newQuestion = new iqdata({
        category: req.body.category,
        type: req.body.type,
        question: req.body.qname,
        imageIq: req.file.filename,
        option1: req.body.opt1,
        option2: req.body.opt2,
        option3: req.body.opt3,
        option4: req.body.opt4,
        right_answer: req.body.answer,
        explanation: req.body.explanation,
        
      });
      await newQuestion.save();
      
        res.redirect('/dashboard/iq_admin');
      
      } 
      catch (error) {
      console.log(error.message);
      res.redirect("/dashboard/iq_admin");
    }}else{
      try {
        console.log(req.body);
        
          
        const newQuestion = new iqdata({
          category: req.body.category,
          type: req.body.type,
          question: req.body.qname,
          option1: req.body.opt1,
          option2: req.body.opt2,
          option3: req.body.opt3,
          option4: req.body.opt4,
          right_answer: req.body.answer,
          explanation: req.body.explanation,
          
        });
        await newQuestion.save();
        
          res.redirect('/dashboard/iq_admin');
        
        } 
        catch (error) {
        console.log(error.message);
        res.redirect("/dashboard/iq_admin");
      }
    }
};

const delete_iq = async (req, res) => {

 const id = req.params.id;
 console.log(id);
 
  await iqdata.findByIdAndDelete(id);
  res.redirect("/dashboard/iq_admin")
  console.log('deleted');
};



const get_question = async (req, res) => {
  try {

    const id = req.params.id;
    console.log(id)
    const singleQues =  iqdata.findOne({_id: id}, function (err, content) {
      if (err) return next(err);
     console.log(content);
    res.render('dashboard/update_iq_admin',{contents: content});
      })

  } catch (error) {
    res.status(500).send(error.message);
  }
};

const iq_update = async (req, res, next) => {
  try {

    const id = req.params.id;

    
    const body = req.body;

    console.log(body.qname);
    console.log(id);
  
    iqdata.findByIdAndUpdate(id ,{
      category: req.body.category,
      type: req.body.type,
      question: req.body.qname,
      option1: req.body.opt1,
      option2: req.body.opt2,
      option3: req.body.opt3,
      option4: req.body.opt4,
      right_answer: req.body.answer,
      explanation: req.body.explanation,
    }, function(err, result){
      if(err){
          console.log(err);
      }
      console.log("RESULT: " + result);
  });
  res.redirect('/dashboard/iq_admin');
      

  } catch (error) {
    res.status(500).send(error.message);
  }
};





const dashboard = async (req, res) => {
  try {
    
    res.render('dashboard/dashboard');

  } catch (error) {
    res.status(500).send(error.message);
  }
};

const iqList = async (req, res) => {
  try {

   let data = { 
    heading: "Verbal IQ Test",
    category: "verbal",
    model:30
    
  };
    res.render('iq/iqlist',{data:data});

  } catch (error) {
    res.status(500).send(error.message);
  }
};


const render_verbal = async (req, res) => {
  try{
 
  const allQuestion = iqdata.find({category:'IQM2', type:'Letter Difference' }, function (err, content) {
    if (err) return next(err);
   console.log(content);
 
 
   const count = iqdata.countDocuments({category:'IQM2', type:'Letter Difference' }, function (err, count) {
    if (err){
        console.log(err)
    }else{
        console.log("Count :", count)
        res.render('iq/iqlanding',{content:content, count});
    }
});
 
    })
} catch (error) {
  res.status(500).send(error.message);
}};


// const iqList = async (req, res) => {
//   try {
//     const allQuestion = Question.find({}, function (err, content) {
//       if (err) return next(err);
//      console.log(content);
//     res.render('admin/dashboard',{content: content});
//       })

//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

const iqListres = async (req, res) => {
  

  try {
    console.log(req.body);
    const newQuestion = new Question({
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

  const resultiq = async (req, res) => {
    try{
 
      const allQuestion = iqdata.find({category:'IQM2', type:'Letter Difference' }, function (err, content) {
        if (err) return next(err);
      const databaseValue = content[0].right_answer;
      
      const UserValue = req.body[content[0]._id];
      let right = 0;
      let wrong = 0;
      let not_answer = 0;
      for (let i=0; i<23;i++){
        if(content[i].right_answer == UserValue){
            right++;
        }else if (req.body[content[i]._id] == '0'){
          not_answer++;
        }else{
          wrong++;
        }
        
      
      }
      const result = {
        right: right ,
        wrong: wrong ,
        no_answer: not_answer,
        time: req.body.countdown, 
      }
      // console.log(req.body.countdown);
      // console.log(right);
      // console.log(wrong);
      // console.log(not_answer);

      const allQuestion = iqdata.find({category:'IQM2', type:'Letter Difference' }, function (err, content) {
        if (err) return next(err);
      //  console.log(content);
      })
      const answer = req.body; 
      delete answer.countdown;  
      const userAnswer = Object.keys(answer);   
      console.log(userAnswer);
      
      console.log(answer);

      res.render('iq/resultiq',{result:result ,content: content, answer: answer, userAnswer: userAnswer});
      })
    } catch (error) {
      res.status(500).send(error.message);
    }};







  const doubts = async (req, res) => {
  

    try {
      
        res.render('doubts');
      
      } 
      catch (error) {
      console.log(error.message);
      res.redirect("/admin");
    }};
  

    const ppdtVideo = async (req, res) => {
  

      try {
        
          res.render('profile_user');
        
        } 
        catch (error) {
        console.log(error.message);
        res.redirect("/admin");
      }};
    
  



module.exports = {
  
  iqListres,
  iqadmin,
  dashboard,
  iq_save,
  delete_iq,
  get_question,
  iq_update,
  iqList,
  render_verbal,
  resultiq,
  doubts,
  ppdtVideo,
};



