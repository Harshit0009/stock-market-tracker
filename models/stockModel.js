// review // ratings // createdAt // ref to tour // ref to user
const mongoose = require('mongoose');
const User = require('./userModel');

const stockSchema = new mongoose.Schema(
  {
    company_name: {
        type: String,
        required: [true, 'Stock must contain company name!'],
    },
    ticker: {
        type: String,
        required: [true, 'Stock must contain ticker!'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Stock must belong to a user!'],
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
