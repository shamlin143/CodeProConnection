const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const codeproSchema = new Schema({
  projectPost: [{type: Schema.Types.ObjectId, ref: "projectPost"}],
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isFreelancer: { type: Boolean },
  isEmployer: { type: Boolean }
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

//   const newUser = new User(userData);
//   newUser.save((err) => {
//     if (err) { return done(err); }
//     return done(null);
//   });
});

// codeproSchema.methods.generateHash = function (password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
// }

// codeproSchema.methods.validPassword = function (password, encrypted) {
//   return bcrypt.compareSync(password, this.password);
// }


// codeproSchema
//   .virtual('passwordConfirmation')
//   .set(function setPasswordConfirmation(passwordConfirmation) {
//     this._passwordConfirmation = passwordConfirmation;
//   });

// codeproSchema.pre('validate', function checkPassword(next) {
//   if (this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
//   next();
// });


const CodePro = mongoose.model("CodePro", codeproSchema);

module.exports = CodePro;