const express = require("express");
require('dotenv').config()
const {v4 : uuidv4} = require('uuid')
const short = require('short-uuid');
const nodemailer = require("nodemailer");

// Importing the model
const roomModel = require("../models/roomModel");

// Creating a router
const mainRouter = new express.Router();



// ------------ Mailer ------------ //

// Creating a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

// Sending mail

const sendEmail = async (formData) => {

    let successCount = 0;
    let failCount = 0;

    formData.allowedUsers.map((user) => {

        let msg = `
            <section>
            <p style="font-size: 2.5rem;text-align: center;">Hello ${user.Name} Your BlockProffer Poll Details :</p>
            <p style="text-align: center;font-size:1.5rem;">Room : <span>${formData.roomID}</span> </p>
            <p style="text-align: center;font-size:1.5rem;">Your Poll Token ID is </p>
            <div style="text-align: center;">
                <h1 style="color: #2563eb;">
                    ${user.Token}
                </h1>
            </div>
            <div style="text-align: center;">
            <p style="text-align: center;font-size:1.5rem;">Your Poll Date : </p>
                <h1 style="color: red;">
                    ${formData.startDate} - ${formData.startTime}
                </h1>
            </div>
            <div style="text-align: center;">
            <p style="text-align: center;font-size:1.5rem;">Your Poll Timings : </p>
                <h1 style="color: red;">
                    ${formData.endDate} - ${formData.endTime}
                </h1>
            </div>
            <div style="text-align: center; font-size: 2.5rem;">
                Thank You for using <span style="color: #2563eb;">BlockProffer</span>
            </div>

            </section>
        `

        var mailOptions = {
            from: 'semicolonstardust@gmail.com',
            to: user.Email,
            subject: formData.title,
            html: msg
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                failCount++;
            } else {
                successCount++;
            }
        }); 

    })

    console.log("Success: " + successCount + "\nFail: " + failCount);
}








// For Testing
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



// Handling Post request to create rooms 
mainRouter.post("/room/create", async (req, res) => {

    try{
        const roomID = uuidv4()
        const data = new roomModel({...req.body.form, roomID});

        req.body.form.allowedUsers.map((user) => {
            user.hasVoted = false;
        })

        if (req.body.sendEmail){
            req.body.form.allowedUsers.map((user) => {
                user.Token = short.generate();
            })
            await sendEmail({...req.body.form, roomID});
        }

        const result = await data.save();
        // depContract.addOptions(req.body.pollOptions);
        res.status(201).send({room : result});
    }
    catch(err){
        res.status(400).send({room : "Something went wrong: " + err});
    }
    
})




// Handling Delete request to delete a room
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





// Handling Patch request for updating votes
mainRouter.patch("/room/upvote", async (req, res) => {

    try {

        const filter = {roomID : req.body.roomID};
        const update = {"$set" : {pollOptions : req.body.pollOptions, allowedUsers : req.body.allowedUsers}};
        
        let result = await roomModel.findOneAndUpdate(filter, update, {
            returnOriginal: false
          });


        if(!result){
            res.status(404).send({"room": "Room Not Found"});
        }
        else{
            res.status(201).send({"room" : result});
        }

    } catch (error) {
        res.status(400).send({"room": "Something went wrong"});
    }

})




module.exports = mainRouter;