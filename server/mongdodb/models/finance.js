const mongoose = require("mongoose")

const finance = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const financeSchema = mongoose.model('finance', finance);

module.exports = financeSchema;
