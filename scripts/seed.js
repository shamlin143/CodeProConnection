const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/CodePro"
);

const CodePro = require('../models/CodePro');
CodePro.collection.drop();

const ProjectPost = require('../models/projectPost');
ProjectPost.collection.drop();


ProjectPost.create([
  // userCreator: "CodePro_id",
  {
    projectName: "e1",
    userName: "Employer1",
    businessType: "Electrician",
    projectFeatures: ["Purchases", "Customer storage", "Schedule services" ],
    projectDescription: "web site",
    fee: "500",
    projectNotes: "A Note",
    date: "Sun Jun 28 2020 00:00:00 GMT-0500 (Central Daylight Time)"
  },
  {
    projectName: "e2",
    userName: "Employer2",
    businessType: "Electrician",
    projectFeatures: ["Purchases", "Customer storage", "Schedule services" ],
    projectDescription: "web site",
    fee: "500",
    projectNotes: "A Note",
    date: "Sun Jun 29 2020 00:00:00 GMT-0500 (Central Daylight Time)"
  },
  {
    projectName: "e3",
    userName: "Employer3",
    businessType: "Electrician",
    projectFeatures: ["Purchases", "Customer storage", "Schedule services" ],
    projectDescription: "web site",
    fee: "500",
    projectNotes: "A Note",
    date: "Sun Jun 28 2020 00:00:00 GMT-0500 (Central Daylight Time)"
  },
  {
    projectName: "e4",
    userName: "Employer4",
    businessType: "Electrician",
    projectFeatures: ["Purchases", "Customer storage", "Schedule services" ],
    projectDescription: "web site",
    fee: "500",
    projectNotes: "A Note",
    date: "Sun Jun 28 2020 00:00:00 GMT-0500 (Central Daylight Time)"
  },
  {
    projectName: "e5",
    userName: "Employer5",
    businessType: "Bar",
    projectFeatures: ["Purchases", "Customer storage", "Schedule services" ],
    projectDescription: "web site",
    fee: "600",
    date: "Wed Jun 24 2020 00:00:00 GMT-0500 (Central Daylight Time)"
  },
  {
    projectName: "e6",
    userName: "Employer6",
    businessType: "Electrician",
    projectFeatures: ["Purchases", "Customer storage", "Schedule services" ],
    projectDescription: "web site",
    fee: "500",
    projectNotes: "A Note",
    date: "Sun Jun 28 2020 00:00:00 GMT-0500 (Central Daylight Time)"
  }

])
.then(user => {
  console.log(`${user.length} users created`);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});



CodePro.create([{
  username: 'dan123',
  email: 'dan@dan.com',
  password: '123',
  passwordConfirmation: '123',
  isFreelancer: false,
  isEmployer: true
}, {
  username: 'ben123',
  email: 'ben@ben.com',
  password: '123',
  passwordConfirmation: '123',
  isFreelancer: true,
  isEmployer: false
}])
.then(user => {
  console.log(`${user.length} users created`);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});
