const mongoose = require('mongoose');

// Creating the database.
mongoose.connect("mongodb://localhost:127.0.0.1:27017/Dnyaneshcdynamic",
 {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
     console.log("connection successful");
 }).catch((err)=>{
     console.log(err);
 });
