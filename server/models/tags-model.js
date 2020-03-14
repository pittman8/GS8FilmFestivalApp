const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TagsSchema = new Schema({
    tag: { type: String, required: true }
});

module.exports = mongoose.model('Tags', TagsSchema);
