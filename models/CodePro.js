const mongoose = require("mongoose");
//  const { CodePro } = require(".");
const Schema = mongoose.Schema;

const codeproSchema = new Schema({
  projectPost: [{type: Schema.Types.ObjectId, ref: "projectPost"}],
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isFreelancer: { type: Boolean },
  isEmployer: { type: Boolean }
});


codeproSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation;
  });

codeproSchema.pre('validate', function checkPassword(next) {
  if (this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  next();
});


const CodePro = mongoose.model("CodePro", codeproSchema);

module.exports = CodePro;
