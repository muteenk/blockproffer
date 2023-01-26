const mongoose = require("mongoose");


const roomSchema = new mongoose.Schema({
    roomID : {
        type: String,
        required: true,
        unique: [true, "Room ID already exists"]
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    pollOptions : {
        type: Array,
        required: true
    },
    resultVisibility : {
        type: Boolean,
        default: false,
        required: true        
    },
    startDate : {
        type: String,
        required: true
    },
    startTime : {
        type: String,
        required: true
    },
    endDate : {
        type: String,
        required: true
    },
    endTime : {
        type: String,
        required: true
    },
    allowedUsers : {
        type: Array,
        required: true
    }
})


const roomModel = new mongoose.model("rooms", roomSchema);


module.exports = roomModel;