const mongoose = require("mongoose")

const law = new mongoose.Schema({
    data: { type: Array, required: true}
})

const lawSchema = mongoose.model('law', law);

module.exports = lawSchema;
