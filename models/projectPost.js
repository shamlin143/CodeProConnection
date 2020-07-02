const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create userDb schema

const ProjectPostSchema = new Schema({
    businessType: {type: String},
    projectName: {type: String, required: true},
    userName: {type: String},
    projectFeatures: [ {type: String}],
    // userId: { type: Schema.Types.ObjectId, ref: "CodePro"},
    projectDescription: { type: String},
    projectNotes: {type: String},
    fee: { type: String},
    date: { type: Date, default: Date.now }
  });
  
const ProjectPost = mongoose.model("ProjectPost", ProjectPostSchema);
module.exports = ProjectPost;
