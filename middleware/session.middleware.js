const session = require('express-session')
const MongoStore = require('connect-mongo')
// const mongo_config = require('../config/db.config')

const sessionStore = MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/sessions'
})

session({
    secret: '12345678',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60)
    },
    store: sessionStore
})

module.exports = session