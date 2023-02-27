const mongoose = require("mongoose")

const User = new mongoose.Schema({
    id: { type: String, required: true },
    api_key: { type: String, required: true },
    email: { type: String, required: true },
    host: { type: String, required: true },
    usage: { type: Array, required: true }
})

const PostSchema = mongoose.model('User', User);

module.exports = PostSchema;
