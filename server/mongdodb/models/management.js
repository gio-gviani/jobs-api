const mongoose = require("mongoose")

const management = new mongoose.Schema({
    data: Array

})

const managementSchema = mongoose.model('management', management);

module.exports = managementSchema;
