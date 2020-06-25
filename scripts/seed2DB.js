const mongoose = require("mongoose");
const db = require("../models/oldindex");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CodePro"
);

function seedUser([]) {
  
    const user = [
       {email: 'email@email.com', password: 'letmein1.'} ,
       {email: 'email2@email.com', password: 'letmein2' },
       {email: 'email3@email.com', password: 'letmein3'},
       {email: 'email4@email.com', passoword: 'letmein4'} 
    ];
  
    // use the Event model to insert/save
    for (user of user) {
      var newUser = new User(user);
      newUser.save();
    }
  
    // seeded!
    res.send('Database seeded!');
  }