const mongoose = require("mongoose")

const management = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const managementSchema = mongoose.model('management', management);

module.exports = managementSchema;
