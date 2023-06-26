const dotenv = require('dotenv')
dotenv.config()

const mongo_config = {
    uri: process.env.MONGO_URI,
    db_name: process.env.DB_NAME
}

module.exports = mongo_config