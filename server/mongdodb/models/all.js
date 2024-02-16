const mongoose = require("mongoose")

const all = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const allSchema = mongoose.model('all', all);

module.exports = allSchema;
