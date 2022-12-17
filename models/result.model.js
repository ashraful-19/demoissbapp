const mongoose = require("mongoose");


const iqSchema = mongoose.Schema({
  id: {
    type: String,
    reuire: true,
  },
  
  category: {
    type: String,
    reuire: true,
  },
  type: {
    type: String,
    reuire: true,
  },
  question: {
    type: String,
    reuire: true,
  },
  imageIq: {
    type: String,
    default: "",
   
  },
  
  option1: {
    type: String,
    reuire: true,
  },
  option2: {
    type: String,
    reuire: true,
  },
  option3: {
    type: String,
    reuire: true,
  },
  option4: {
    type: String,
    reuire: true,
  },
  right_answer: {
    type: String,
    reuire: true,
  },
  explanation: {
    type: String,
    reuire: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },

});


const ContentSchema = mongoose.Schema({
  type: {
    type: String,
    reuire: true,
  },
  title: {
    type: String,
    reuire: true,
  },
  
  link: {
    type: String,
    reuire: true,
  },
  

});
module.exports = mongoose.model("iq_admin", iqSchema);
// module.exports = mongoose.model("Content", ContentSchema);

