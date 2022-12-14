const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, unique: true, required: true },
    emoji: { type: String, required: true },
    images: [{ type: String, required: true }],
    tags: [{ type: String, required: true }],
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('elements', schema);