const express = require("express");
// const depContract = require("../../solidity/migrations/2_deploy_contract.js");
const roomModel = require("../models/roomModel");
const {v4 : uuidv4} = require('uuid')

// it works same as app = express()
const mainRouter = new express.Router();




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
    



// Handling Post request to join a room
mainRouter.post('/room/join', async (req, res) => {

    let room = req.body;

    try{
        const data = await roomModel.find({roomID : room.roomName});

        if (data.length === 0){
            res.status(404).send({"room" : "Room not found"});
        }
        else{ 
            res.status(200).send({"room" : data[0]});
        }
    }
    catch(err){
        res.status(400).send({"room" : "Something went wrong: " + err});
    }
    
});




// Handling Get Request for an indivisual data 
mainRouter.get("/room/join/:id", async (req, res) => {

    let roomID = req.params.id;

    try{
        const data = await roomModel.find({roomID});

        if (!data){
            res.status(404).send({"room" : "Room not found"});
        }
        else{ 
            res.status(200).send({"room" : data});
        }
    }
    catch(err){
        res.status(400).send({room : "Something went wrong: " + err});
    }

})






// Handling Post request to add rooms to the database 
mainRouter.post("/room/create", async (req, res) => {

    try{
        const roomID = uuidv4()
        const data = new roomModel({...req.body, roomID : roomID});
        const result = await data.save();
        // depContract.addOptions(req.body.pollOptions);
        res.status(201).send({room : result});
    }
    catch(err){
        res.status(400).send({room : "Something went wrong: " + err});
    }
    
})




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




module.exports = mainRouter;