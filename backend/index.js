// Modules
const express = require("express")
const http = require("http");
const path = require('path')
const {Server} = require("socket.io")
const dotenv = require('dotenv').config()
const cors = require("cors");
require('./src/config/db');


// Models
const roomModel = require("./src/models/roomModel");


// Configuration
const app = express();
const port = process.env.port || 5555;
const server = http.createServer(app);
const io = new Server(server);


let room = [
{
    roomID: "12345678",
    title: "Room 1",
    description: "This is room 1",
},
{
    roomID: "87654321",
    title: "Room 2",
    description: "This is room 2"
},
{
    roomID: "1234567890",
    title: "Room 3",
    description: "This is room 3"
}
];



app.use(cors({
    origin: "http://localhost:3000"
})); 
app.use(express.json());



// End Points
app.get('/:room', (req, res) => {

    room.forEach((key) => {
        if (key['roomID'] == req.params.room){
            return res.status(200).send({'room': req.params.room})
        }
    })

    res.status(404).send({'room': "Not Found"});
});



// Socket Listener
io.on("connection", (socket) => {
    console.log('New User Connected -> ' + socket.id );
    socket.on("disconnect", () => {
        console.log("User Disconnected")
    })
    socket.on("message", (msg) => {
        socket.broadcast.emit("message", msg);
    })
});


// Server
server.listen(port, () => {
    console.log(`Serving at http://127.0.0.1:${port}`);
})
