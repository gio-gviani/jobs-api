const mongoose = require("mongoose")

const construction = new mongoose.Schema({
    title: String,
    company: String,
    posted: String,
    expires: String,
    body: String,
    companyImage: String
})

const constructionSchema = mongoose.model('construction', construction);

module.exports = constructionSchema;
