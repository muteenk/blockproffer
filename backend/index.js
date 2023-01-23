// Modules
const express = require("express")
const http = require("http");
const path = require('path')
const {Server} = require("socket.io")
const cors = require("cors");


// Configuration
const app = express();
const port = 5555 || process.env.port
const server = http.createServer(app);
const io = new Server(server);
// app.set('view engine', "ejs");
// app.use('/static', express.static(path.join(__dirname, '../public')))


app.use(cors({
    origin: "http://localhost:3000"
})); 
app.use(express.json());



// End Points
app.get('/:room', (req, res) => {

    if (req.params.room == "testNotFound"){
        return res.status(200).send({'room': "Not Found"})
    }

    res.status(200).send({'room': req.params.room});
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