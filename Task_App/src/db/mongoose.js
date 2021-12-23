const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:/task-app-api')

// const User = mongoose.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     },
// })

// const newUser = new User({name: "User Name", age: 'Rohan'})
//
// newUser.save().then(() => {
//     console.log(newUser)
// }).catch((error) => {
//     console.log('Errors!', error)
// })

// here Name 'Task' will automatically get converted to 'tasks' in mongodb database
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn about mongoose',
    completed: false,
})

task.save().then( () => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})