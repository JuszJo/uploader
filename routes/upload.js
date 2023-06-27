const express = require('express')
const { handleUpload } = require('../controllers/storage.controller')

const router = express.Router()

router.post('/upload', handleUpload)

module.exports = router