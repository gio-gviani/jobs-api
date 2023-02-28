const mongoose = require("mongoose")

const finance = new mongoose.Schema({
    data: { type: Array, required: true}
})

const financeSchema = mongoose.model('finance', finance);

module.exports = financeSchema;
