const mongoose = require("mongoose");
const CodeProSession = new mongoose.Schema({

    userId: {
        type: String,
        default: -1
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const CodePro = mongoose.model("CodePro", codeproSchema);

module.exports = CodePro;
