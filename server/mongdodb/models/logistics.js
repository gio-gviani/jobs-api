const mongoose = require("mongoose")

const logistics = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const logisticsSchema = mongoose.model('logistics', logistics);

module.exports = logisticsSchema;
