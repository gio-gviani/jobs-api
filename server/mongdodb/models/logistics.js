const mongoose = require("mongoose")

const logistics = new mongoose.Schema({
    data: Array
})

const logisticsSchema = mongoose.model('logistics', logistics);

module.exports = logisticsSchema;
