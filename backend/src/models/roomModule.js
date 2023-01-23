const mongoose = require("mongoose");
const validator = require("validator");


const roomSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        minlength: 8,
        unique: [true, "Room already exists"]
    },
    poll : {
        type: Object,
        required: true
    }
})


const roomModel = new mongoose.model("rooms", roomSchema);


module.exports = roomModel;