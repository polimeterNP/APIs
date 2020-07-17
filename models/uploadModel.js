const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: [true, 'The filename is necessary']
    },
    mimetype: {
        type: String,
        required: [true, 'The mimetype is necessary']
    },
    path: {
        type: String,
        required: [true, 'The path is necessary']
    }
});

const uploads = mongoose.model("uploads", uploadSchema);
module.exports = uploads;



