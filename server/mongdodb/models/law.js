const mongoose = require("mongoose")

const law = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const lawSchema = mongoose.model('law', law);

module.exports = lawSchema;
