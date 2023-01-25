const express = require("express");
const roomModel = require("../models/roomModel");

// it works same as app = express()
const mainRouter = new express.Router();



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
    


// Handling Post request to join a room
mainRouter.post('/room/join', (req, res) => {

    const data = req.body;

    let roomFound = false;

    room.forEach((room) => {
        if (room.roomID === data.roomName) {
            roomFound = true;
            res.status(200).send({"room" : room});
        }
    })

    if (!roomFound){
        res.status(404).send({"room" : "Room not found"});
    }
    
});




// Handling Post request to add rooms to the database 
mainRouter.post("/room/create", async (req, res) => {

    try{
        const data = new roomModel({...req.body, roomID: Math.floor(Math.random() * 100000000)});
        const result = await data.save();
        console.log(result);
        res.status(201).send(result);
    }
    catch(err){
        res.status(400).send(err);
    }
    
})



// Handling Get request to show all the data in the database
mainRouter.get("/", async (req, res) => {

    try{
        const data = await roomModel.find();
        res.status(200).send(data);
    }
    catch(err){
        res.status(400).send(err);
    }

})


// // Handling Get Request for an indivisual data 
// mainRouter.get("/students/:name", async (req, res) => {

//     let objName = req.params.name;

//     try{
//         const data = await student.find({name: objName});

//         if (!data){
//             res.status(404).send();
//         }
//         else{ 
//             res.status(200).send(data);
//         }
//     }
//     catch(err){
//         res.status(400).send(err);
//     }

// })




// // Handling Patch request for updating Data

// mainRouter.patch("/students/:id", async (req, res) => {

//     try {
        
//         const result = await student.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true});


//         if(!result){
//             res.status(404).send();
//         }
//         else{
//             res.status(200).send(result);
//         }

//     } catch (error) {
//         res.status(400).send(error);
//     }

// })



// Handling Delete request to delete data

mainRouter.delete("/room/destroy/:id", async (req, res) => {

    try {
        
        const result = await roomModel.findByIdAndRemove({_id: req.params.id});

        if(!result){
            res.status(404).send();
        }
        else{
            res.status(200).send(result);
        }

    } catch (error) {
        res.status(400).send(error);
    }

})



module.exports = mainRouter;