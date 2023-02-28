const mongoose = require("mongoose")

const logistics = new mongoose.Schema({
    data: { type: Array, required: true}
})

const logisticsSchema = mongoose.model('logistics', logistics);

module.exports = logisticsSchema;
