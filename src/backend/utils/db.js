
const mongoose = require("mongoose")

const URL = process.env.MONGODB_URL

const connectDB = async function () {
    try {
        await mongoose.connect(URL)
        console.log("database connected successfully")
    } catch (error) {
        console.log("database not connected")
    }
}

module.exports = connectDB