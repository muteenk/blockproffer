const express = require("express");
const {v4 : uuidv4} = require('uuid')
const nodemailer = require("nodemailer");
// const depContract = require("../../solidity/migrations/2_deploy_contract.js");


// Importing the model
const roomModel = require("../models/roomModel");


// Creating a router
const mainRouter = new express.Router();



// ------------ Mailer ------------ //

// Creating a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'semicolonstardust@gmail.com',
        pass: 'boslhujlgblxowts'
    }
});

// Sending mail

const sendEmail = async (formData) => {

    let successCount = 0;
    let failCount = 0;

    formData.allowedUsers.map((user) => {

        let msg = `
            <section>
            <p style="font-size: 2.5rem;text-align: center;">Your BlockProffer Poll Details</p>
            <p style="text-align: center;font-size:1.5rem;">Your Poll Token ID is </p>
            <div style="text-align: center;">
                <h1>
                    ${user.Token}
                </h1>
            </div>
            <div style="text-align: center;">
            <p style="text-align: center;font-size:1.5rem;">Your Poll Date : </p>
                <h1>
                    ${formData.startDate} - ${formData.endDate}
                </h1>
            </div>
            <div style="text-align: center;">
            <p style="text-align: center;font-size:1.5rem;">Your Poll Timings : </p>
                <h1>
                    ${formData.startTime} - ${formData.endTime}
                </h1>
            </div>
            <div style="text-align: center; font-size: 2.5rem;">
                Thank You for using BlockProffer
            </div>

            </section>
        `

        var mailOptions = {
            from: 'semicolonstardust@gmail.com',
            to: user.Email,
            subject: formData.title,
            html: msg
            // text: `Hello ${user.Name},\n${user.Token} will be your voting token for the room ${formData.roomID}.\n\nThe poll will be live: \n\tFrom : ${formData.startDate} ${formData.startTime}\n\tTo : ${formData.endDate} ${formData.endTime}\n\nRegards,\nBlock Proffer Team`
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

        if (req.body.sendEmail){
            req.body.form.allowedUsers.map((user) => {
                user.Token = uuidv4();
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
        const update = {pollOptions : req.body.pollOptions};
        
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