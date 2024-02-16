const mongoose = require("mongoose")

const tech = new mongoose.Schema({
    data: Array
})

const techSchema = mongoose.model('tech', tech);

module.exports = techSchema;
