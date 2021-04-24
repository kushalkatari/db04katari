const mongoose = require("mongoose")
const dressSchema = mongoose.Schema({
name: String,
cost: {
    type: Number,

    min:[10,"Min"],
    max:[1000,"Max"]
},
brand: {
    type: String,
    minimumLength: 7
}
})
module.exports = mongoose.model("Dress", dressSchema)