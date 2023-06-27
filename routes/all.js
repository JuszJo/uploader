const router = require('express').Router()

const { handleSeeAll } = require('../controllers/storage.controller')

router.get('/all', handleSeeAll)

module.exports = router