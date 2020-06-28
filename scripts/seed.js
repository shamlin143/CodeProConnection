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
},
{
  employerID: "e1",
  employerUserName: "Employer1",
  businessType: "Electrician",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "500",
  date: "Sun Jun 28 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e2",
  employerUserName: "Employer2",
  businessType: "Plumber",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ] ,
  fee: "600",
  date: "Sat Jun 27 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e3",
  employerUserName: "Employer3",
  businessType: "Artist",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "700",
  date: "Fri Jun 26 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e4",
  employerUserName: "Employer4",
  businessType: "Consultant",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "500",
  date: "Thu Jun 25 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e5",
  employerUserName: "Employer5",
  businessType: "Bar",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "600",
  date: "Wed Jun 24 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e6",
  employerUserName: "Employer6",
  businessType: "Meth Cooker",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "700",
  date: "Tue Jun 23 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e7",
  employerUserName: "Employer7",
  businessType: "Electrician",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "500",
  date: "Mon Jun 22 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e8",
  employerUserName: "Employer8",
  businessType: "Plumber",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "600",
  date: "Sun Jun 21 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e9",
  employerUserName: "Employer9",
  businessType: "Artist",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "700",
  date: "Sat Jun 20 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e10",
  employerUserName: "Employer10",
  businessType: "Consultant",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "500",
  date: "Fri Jun 19 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e11",
  employerUserName: "Employer11",
  businessType: "Bookstore",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "600",
  date: "Thu Jun 18 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e12",
  employerUserName: "Employer12",
  businessType: "Meth Cooker",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "700",
  date: "Wed Jun 17 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e13",
  employerUserName: "Employer13",
  businessType: "Insurance",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "500",
  date: "Tue Jun 16 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e14",
  employerUserName: "Employer14",
  businessType: "Auto Dealership",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "600",
  date: "Mon Jun 15 2020 00:00:00 GMT-0500 (Central Daylight Time)"
},
{
  employerID: "e15",
  employerUserName: "Employer15",
  businessType: "Restaurant",
  appFeatures: ["Purchases", "Customer storage", "Schedule services" ],
  fee: "700",
  date: "Sun Jun 14 2020 00:00:00 GMT-0500 (Central Daylight Time)"
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
