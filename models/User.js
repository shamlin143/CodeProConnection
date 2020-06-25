const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create userDb schema
const userDbSchema = new Schema({
    userCreator: { type: Schema.Types.ObjectId, ref: "login User" },
    freelancerCredentials: { type: String},
    freelancerExperience: { type: String},
    employerProjectId: { type: Schema.Types.ObjectId, ref: "employerId"},
    employerProjectDesc: { type: String},
    employerFee: { type: Number},
    date: { type: Date, default: Date.now }
  });
const UserDb = mongoose.model("UserDb", userDbSchema);
module.exports = UserDb;