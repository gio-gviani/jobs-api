const mongoose = require("mongoose")

const management = new mongoose.Schema({
    data: { type: Array, required: true}
})

const managementSchema = mongoose.model('management', management);

module.exports = managementSchema;
