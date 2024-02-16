const mongoose = require("mongoose")

const law = new mongoose.Schema({
    data: Array
})

const lawSchema = mongoose.model('law', law);

module.exports = lawSchema;
