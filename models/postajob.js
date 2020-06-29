const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create userDb schema

const PostaJobSchema = new Schema({
    // userCreator: { type: Schema.Types.ObjectId, ref: "login User" },
    freelancerCredentials: { type: String},
    freelancerExperience: { type: String},
    employerProjectId: { type: Schema.Types.ObjectId, ref: "CodePro"},
    employerProjectDesc: { type: String},
    employerFee: { type: String},
    date: { type: Date, default: Date.now }
  });

const PostaJob = mongoose.model("PostaJob", PostaJobSchema);
module.exports = PostaJob;