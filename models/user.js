const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const UserSchema = new mongoose.Schema({
  local: {
    email: String,
    password: String,
  }
});

UserSchema.methods.generateHash = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

UserSchema.methods.validPassword = function(password){
  return bcrypt.compairSync(password, this.local.password);
}

module.exports = mongoose.model("User", UserSchema)
