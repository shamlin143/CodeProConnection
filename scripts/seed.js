const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/User"
);

const CodePro = require('../models/CodePro');
CodePro.collection.drop();

const ProjectPost = require('../models/projectPost');
ProjectPost.collection.drop();


ProjectPost.create([{
  // userCreator: "CodePro_id",
  freelancerCredentials: "Javascript",
  freelancerExperience: "2 years",
  employerProjectId: "123456789123",
  employerProjectDesc: "I need a website",
  employerFee: "100",
  date: "6-27-2020"
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
