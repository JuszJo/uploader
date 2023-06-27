const AuthModel = require("../models/Auth");
const UserModel = require("../models/User");

async function verifyCredentials(username, password) {
    const value = await AuthModel.findOne({username: username, password: password})

    return value
}

function createUser(username, password) {
    const user = new AuthModel({username: username, password: password})
    
    const userModel = UserModel({
        name: username,
        files: []
    })

    user.save()
    
    userModel.save()
}

module.exports = {
    verifyCredentials,
    createUser
}