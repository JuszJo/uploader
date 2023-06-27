const mongoose = require('mongoose')

const AuthSchema = mongoose.Schema({
    username: String,
    password: String,
})

const AuthModel = mongoose.model('credential', AuthSchema)

module.exports = AuthModel