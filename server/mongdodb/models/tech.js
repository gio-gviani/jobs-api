const mongoose = require("mongoose")

const tech = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const techSchema = mongoose.model('tech', tech);

module.exports = techSchema;
