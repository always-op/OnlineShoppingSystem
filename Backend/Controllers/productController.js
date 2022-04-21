const Product = require('../models/ProductModel')
const catchAsyncError = require('../utils/catchAsyncErrors')


exports.createProduct = catchAsyncError(async(req,res,next) => {
    const product = await Product.create(req.body)
    res.status(201).json({success:true,product})
})

exports.getAllProducts = catchAsyncError(async(req,res,next) => {
    const products = await Product.find()
    res.status(200).json({success:true,products})
})

