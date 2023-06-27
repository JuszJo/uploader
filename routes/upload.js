const router = require('express').Router()

const { handleUpload } = require('../controllers/storage.controller')

router.post('/upload', handleUpload)

module.exports = router