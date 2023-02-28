const mongoose = require("mongoose")

const all = new mongoose.Schema({
    data: { type: Array, required: true}
})

const allSchema = mongoose.model('all', all);

module.exports = allSchema;
