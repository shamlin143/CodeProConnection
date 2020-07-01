const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create userDb schema

const ProjectPostSchema = new Schema({
    // userCreator: { type: Schema.Types.ObjectId, ref: "login User" },
    freelancerCredentials: { type: String},
    freelancerExperience: { type: String},
    businessType: {type: String},
    employerID: {type: String},
    employerUserName: {type: String},
    appFeatures: [ {type: String}],
    projectId: { type: Schema.Types.ObjectId, ref: "CodePro"},
    projectDesc: { type: String, argument: [144]},
    projectNotes: {type: String},
    fee: { type: String},
    date: { type: Date, default: Date.now }
  });

const ProjectPost = mongoose.model("ProjectPost", ProjectPostSchema);
module.exports = ProjectPost;
