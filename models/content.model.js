const mongoose = require("mongoose");

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

module.exports = mongoose.model("Content", ContentSchema);

