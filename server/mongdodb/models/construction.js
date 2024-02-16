const mongoose = require("mongoose")

const construction = new mongoose.Schema({
    data: Array
})

const constructionSchema = mongoose.model('construction', construction);

module.exports = constructionSchema;
