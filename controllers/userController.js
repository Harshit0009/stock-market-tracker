const AppError = require('../utils/appError');
const User = require('./../models/userModel');
const Stock = require('./../models/stockModel');

const catchAsync = require('./../utils/catchAsync');

exports.getStock = (req, res) => {
    const { company_name, ticker } = req.body;

    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined!'
    });
};
const createOne = Model =>  catchAsync(async (req, res, next) => {

    const doc = await Model.create(req.body);

    res.status(201).json({
        status: 'success', 
        data: {
            data: doc
        }
    });
});
exports.createStock = createOne(Stock);


