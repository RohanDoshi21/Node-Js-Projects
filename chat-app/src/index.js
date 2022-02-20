const express = require('express')
const path = require('path')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

io.on('connection', (socket) => {
    console.log('New WebSocket Connection');

    socket.emit('countUpdated', count)

    socket.emit('message', "Welcome")
    socket.broadcast.emit('message', "A new user has joined!")

    socket.on('increment', () => {
        count++;
        // socket.emit('countUpdated', count)  //this line will emit only to one connection
        io.emit('countUpdated', count) // this will emit to all the connected clients
    })

    socket.on('sendMessage', (message) => {
        io.emit('message', message)
    })

    socket.on('disconnect', () => {
        io.emit('message', "A user has left")
    })

    socket.on('sendLocation', (coords) => {
        io.emit('message', `location: ${coords.latitude}, ${coords.longitude}`)
    })
})

server.listen(port, () => {
    console.log('Server is up on PORT ' + port);
})