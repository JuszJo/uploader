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

const UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel