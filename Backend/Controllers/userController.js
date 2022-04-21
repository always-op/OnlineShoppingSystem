const User = require('../models/UserModel')
const ErrorHandler = require('../utils/ErrorHandler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const catchAsyncError = require('../utils/catchAsyncErrors')
const JWT_SECRET = 'kacvljavwcyavcjavc'
const JWT_EXPIRE = '5d'
const COOKIE_EXPIRE = 5

exports.register = catchAsyncError(async(req,res,next) => {

    const {email,password} =req.body


    const user = await User.create({
        email,
        password
    })

    const token = jwt.sign(
        {id:user.id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRE}
    )

    const options = {
        expires : new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly : true
    }

    res.status(200).cookie('token',token,options).json({
        success:true,
        user
    })
})



exports.singin = catchAsyncError(async(req,res,next) => {
    const {email,password} = req.body

    if(!email || !password) {
        return next(new ErrorHandler("Please Enter Email and Password",400))
    }

    const user = await  User.findOne({email})

    if(!user) {
        return next(new ErrorHandler("Invalid Email or Password",400))
    }

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch) {
        return next(new ErrorHandler("Invalid Email or Password",400))
    }

    const token = jwt.sign(
        {id:user.id},
        JWT_SECRET,
        {expiresIn:JWT_EXPIRE}
    )

    const options = {
        expires : new Date(Date.now() + COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly : true
    }

    res.status(200).cookie('token',token,options).json({
        success:true,
        user
    })

} 
)


exports.logout = catchAsyncError(async(req,res,next)=>{
    res.cookie("token",null, {
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message: "logged out is successfull"
    })
})


exports.hello = catchAsyncError(async(req,res,next)=>{
    res.send('hello')
})