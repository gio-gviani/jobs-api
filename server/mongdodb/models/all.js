const mongoose = require("mongoose")

const all = new mongoose.Schema({
    data: Array
})

const allSchema = mongoose.model('all', all);

module.exports = allSchema;
