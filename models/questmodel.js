const mongoose = require("mongoose");

const questSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    quest: String,
    reward: String,
    time: String

});

module.exports = mongoose.model("Quest", questSchema);
