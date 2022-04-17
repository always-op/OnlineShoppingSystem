const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:[true, "Please Enter a valid email"],
        validate:[validator.isEmail,"please enter a valid Email"]
    },
    password: {
        type:String,
        required: [true,"please enter a valid password"],
        minlength : [8, "Password must be atleast 8 characters long"]
    }
})

userSchema.pre("save", async function(next)  {
    if(!this.isModified('password')){
      next();
    }
    this.password = await bcrypt.hash(this.password,10)
})

module.exports = mongoose.model('User', userSchema)