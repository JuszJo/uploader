const router = require('express').Router()

router.get('/', (req, res) => {
    res.sendFile(`C:/Users/Joshua/Desktop/Programming/HTMLCSSJAVASCRIPT/multer/public/pages/index.html`)
})

module.exports = router