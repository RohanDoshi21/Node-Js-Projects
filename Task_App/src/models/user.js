const mongoose = require('mongoose')
const validator = require("validator");
const bcrypt = require("bcrypt");

mongoose.connect('mongodb://127.0.0.1:/task-app-api')

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true,
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

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})

    if (!user){
        throw new Error('Unable to login')
    }

    const isMatched = await bcrypt.compare(password, user.password)

    if (!isMatched){
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving/updating
userSchema.pre('save', async function (next){
    const user = this
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User