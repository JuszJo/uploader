const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: String,
    files: [
        {
            name: String,
            file: String
        }
    ]
})

module.exports = UserSchema