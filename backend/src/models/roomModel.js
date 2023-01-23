const mongoose = require("mongoose");


const roomSchema = new mongoose.Schema({
    roomID : {
        type: String,
        required: true,
        minlength: 8,
        unique: [true, "Room already exists"]
    },
    title : {
        type: String,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    pollData : {
        type: Object,
        required: true
    },
    resultVisibility : {
        type: Boolean,
        default: false,
        required: true        
    },
    allowedUsers : {
        type: Array,
        required: true
    },
    startDate : {
        type: Date,
        default: Date.now,
        required: true
    },
    endDate : {
        type: Date,
        required: true
    }
})


const roomModel = new mongoose.model("rooms", roomSchema);


module.exports = roomModel;