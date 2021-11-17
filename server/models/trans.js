const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransSchame = Schema({
    name: String,
    lastname: String,
    dui: String,
    money: String,
    email:{
        type: String,
        unique: true
    },
    message: String,
    cuenta:String,
    active: Boolean,
})

module.exports = mongoose.model("Trans", TransSchame)