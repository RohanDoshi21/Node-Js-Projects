const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer = require('multer')
// const upload = multer({
//     dest: 'images'
// })
//
// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// })
// app.use((req, res, next)=> {
//     if (req.method === 'GET'){
//         res.send('GET requests are disabled')
//     }
//     else{
//         next()
//     }
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



// app.get('/users', (req, res) => {
//     User.find({}).then((users)=>{
//         res.send(users)
//     }).catch((e) => {
//         res.status(500).send(e)
//     })
// })
//
// app.get('/users/:id', (req, res) => {
//     const _id = req.params.id
//
//     User.findById(_id).then((user) =>{
//         if (!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     }).catch(() =>{
//         res.status(500).send()
//     })
// })
//
// app.post('/tasks', (req, res) => {
//     const task = new Task(req.body)
//
//     task.save().then(() => {
//         res.send(task)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })
//
// app.get('/tasks', (req, res) => {
//     Task.find({}).then((tasks) =>{
//         res.send(tasks)
//     }).catch((e)=>{
//         res.status(500).send(e)
//     })
// })
//
// app.get('/tasks/:id', (req, res) => {
//     const _id = req.params.id
//
//     Task.findById(_id).then((task) =>{
//         if (!task){
//             return res.status(404).send()
//         }
//         res.send(task)
//     }).catch(() =>{
//         res.status(500).send()
//     })
// })

// app.post('/tasks', async (req, res) => {
//     const task = new Task(req.body)
//
//     try {
//         await task.save()
//         res.status(201).send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
//
// app.get('/tasks', async (req, res) => {
//     try {
//         const tasks = await Task.find({})
//         res.send(tasks)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
//
// app.get('/tasks/:id', async (req, res) => {
//     const _id = req.params.id
//
//     try {
//         const task = await Task.findById(_id)
//
//         if (!task) {
//             return res.status(404).send()
//         }
//
//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })
//
// app.patch('/tasks/:id', async (req, res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['description', 'completed']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
//
//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }
//
//     try {
//         const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true})
//
//         if (!task) {
//             return res.status(404).send()
//         }
//
//         res.send(task)
//     } catch (e) {
//         res.status(400).send(e)
//     }
// })
//
// app.delete('/tasks/:id', async (req, res)=> {
//     try{
//         const task = await Task.findByIdAndDelete(req.params.id)
//
//         if (!task){
//             return res.status(401).send()
//         }
//
//         res.send(task)
//     } catch (e) {
//         res.status(500).send()
//     }
// })

// app.listen(port, () => {
//     console.log('Server active on port ' + port)
// })