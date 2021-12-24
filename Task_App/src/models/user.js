const mongoose = require('mongoose')
const validator = require("validator");

mongoose.connect('mongodb://127.0.0.1:/task-app-api')

const User = mongoose.model('User', {
    name: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if (!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minLength: 7,
        trim: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value){
            if (value < 0) {
                throw new Error('Age cannot be negative')
            }
        }
    },
})

module.exports = User