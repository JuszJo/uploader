const router = require('express').Router()

const { sendLogin, handleLogin } = require('../controllers/auth.controller')

router.get('/login', sendLogin)

router.post('/login', handleLogin)

module.exports = router