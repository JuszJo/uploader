const session = require('express-session')
const MongoStore = require('connect-mongo')

const sessionStore = MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/sessions'
})

module.exports = session({
    secret: '12345678',
    resave: true,
    rolling: true,
    saveUninitialized: false,
    cookie: {
        maxAge: (1000 * 60)
    },
    store: sessionStore
})