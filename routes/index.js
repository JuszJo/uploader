const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(`C:/Users/Joshua/Desktop/Programming/HTMLCSSJAVASCRIPT/multer/index.html`)
})

module.exports = router