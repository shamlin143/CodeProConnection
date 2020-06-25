const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/User"
);

const CodePro = require('../models/CodePro');

CodePro.collection.drop();

CodePro.create([{
  username: 'dan123',
  email: 'dan@dan.com',
  password: '123',
  passwordConfirmation: '123'
}, {
  username: 'ben123',
  email: 'ben@ben.com',
  password: '123',
  passwordConfirmation: '123'
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