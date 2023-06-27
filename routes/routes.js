const indexRoute = require('./index')
const uploadRoute = require('./upload')
const allRoute = require('./all')
const downloadRoute = require('./download')


function handleRoutes(app) {
    app.use(indexRoute)

    app.use(uploadRoute)

    app.use(allRoute)

    app.use(downloadRoute)
}

module.exports = handleRoutes