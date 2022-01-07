const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:/task-app-api')

// here Name 'Task' will automatically get converted to 'tasks' in mongodb database
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})


const Task = mongoose.model('Task', taskSchema)

module.exports = Task