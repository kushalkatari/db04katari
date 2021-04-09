const mongoose = require("mongoose")
const dressSchema = mongoose.Schema({
name: String,
cost: Number,
brand: String
})
module.exports = mongoose.model("Dress", dressSchema)