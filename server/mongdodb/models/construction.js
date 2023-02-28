const mongoose = require("mongoose")

const construction = new mongoose.Schema({
    data: { type: Array, required: true}
})

const constructionSchema = mongoose.model('construction', construction);

module.exports = constructionSchema;
