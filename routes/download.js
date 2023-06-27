const router = require('express').Router()

const { handleDownload } = require('../controllers/storage.controller')

router.get('/download', handleDownload)

module.exports = router