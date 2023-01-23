// Modules
const express = require("express")
const http = require("http");
const path = require('path')
const {Server} = require("socket.io")
const dotenv = require('dotenv').config()
const cors = require("cors");
require('./src/config/db');



// Routes
const mainRouter = require("./src/routes/mainRoutes");


// Configuration
const app = express();
const port = process.env.port || 5555;
const server = http.createServer(app);
const io = new Server(server);




app.use(cors({
    origin: "http://localhost:3000"
})); 
app.use(express.json());
app.use(mainRouter);



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
