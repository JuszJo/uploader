const express = require('express')
const { handleSeeAll } = require('../controllers/storage.controller')

const router = express.Router()

router.get('/all', handleSeeAll)

module.exports = router