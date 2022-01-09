const mongoose = require('mongoose')
// const validator = require("validator");

mongoose.connect(process.env.MONGODB_URL)

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value){
//             if (!validator.isEmail(value)){
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     password:{
//         type: String,
//         required: true,
//         minLength: 7,
//         trim: true,
//     },
//     age: {
//         type: Number,
//         validate(value){
//             if (value < 0) {
//                 throw new Error('Age cannot be negative')
//             }
//         }
//     },
// })
//
// const newUser = new User({name: "Rohan", email: "rohan@gamil.com", age: 19, password: "rohandoshi123" })
//
// newUser.save().then(() => {
//     console.log(newUser)
// }).catch((error) => {
//     console.log('Errors!', error)
// })

// here Name 'Task' will automatically get converted to 'tasks' in mongodb database
// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true,
//     },
//     completed: {
//         type: Boolean,
//         default: false,
//     }
// })

// const task = new Task({
//     description: 'New Task without completed status',
// })
//
// task.save().then( () => {
//     console.log(task)
// }).catch((error) => {
//     console.log(error)
// })