const mongoose = require("mongoose");
const db = require("../models/oldindex");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CodePro"
);

const userSeed = [
  {
    email: "email6@email.com",
    password: "letmein6",
    
  },
  {
    email: "email5@email.com",
    password: "letmein5",
    
  },
  {
    email: "email4@email.com",
    password: "letmein4",
   
  },
  {
    email: "email3@email.com",
    pasword: "letmein3",
  
  },
  
  {
    email: "email2@email.com",
    password: "letmein2",
    
  },
  {
    email: "email1@eamil.com",
    password: "letmein",
    
  }
];
db.CodePro
// User(
//   {
//     email: "",
//     password: ""
//   }
// )
  .remove({})
  .then(() => db.CodePro.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
