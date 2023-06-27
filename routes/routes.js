const session = require('../middleware/session.middleware')
const checkAuth = require('../middleware/auth.middleware')
const indexRoute = require('./index')
const loginRoute = require('./login')
const uploadRoute = require('./upload')
const allRoute = require('./all')
const downloadRoute = require('./download')


function handleRoutes(app) {
    app.use(session)

    app.use(checkAuth)

    app.use(indexRoute)

    app.use(loginRoute)

    app.use(uploadRoute)

    app.use(allRoute)

    app.use(downloadRoute)
}

module.exports = handleRoutes