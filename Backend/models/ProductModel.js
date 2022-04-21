const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title: {
        type:String,
        required:[true,"Please Enter a valid Title"]
    },

    price : {
        type:Number,
        required: [true,"please Enter a vaild Price"]
    },

    rating: {
        type:Number,
        default:0
    },

    image: {
        type:String,
        required:[true,"please Enter a valid Url"]
    }

})


module.exports = mongoose.model('Product',productSchema)