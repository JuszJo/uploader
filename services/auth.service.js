const AuthModel = require("../models/Auth");

async function verifyCredentials(username, password) {
    const value = await AuthModel.findOne({username: username, password: password})

    return value
}

module.exports = {
    verifyCredentials
}