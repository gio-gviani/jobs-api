const mongoose = require("mongoose")

const tech = new mongoose.Schema({
    data: { type: Array, required: true}
})

const techSchema = mongoose.model('tech', tech);

module.exports = techSchema;
