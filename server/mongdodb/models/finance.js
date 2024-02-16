const mongoose = require("mongoose")

const finance = new mongoose.Schema({
    data: Array
})

const financeSchema = mongoose.model('finance', finance);

module.exports = financeSchema;
