// const crypto = require('crypto')
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const stock = require('./stockModel');


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
  },
  email: {
    type: String,
    required: [true, 'Pleasse enter your email'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password'],
    minlength: 8,
    validate: {
      // This only works on SAVE and CREATE
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords does not match',
    },
  },
  stocks: [
    {
        type: mongoose.Schema.ObjectId,
        ref: 'stock'    
    }
    ]
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  const ans = await bcrypt.compare(candidatePassword, userPassword);
  console.log(ans);
  return ans;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
