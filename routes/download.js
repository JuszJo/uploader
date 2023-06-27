const express = require('express')
const { handleDownload } = require('../controllers/storage.controller')

const router = express.Router()

router.get('/download', handleDownload)

module.exports = router