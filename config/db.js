const mongoose = require("mongoose");

const dbURL = "mongodb+srv://admin:admin@cluster0.hodg468.mongodb.net/issb?retryWrites=true&w=majority";


  mongoose.connect(dbURL);
