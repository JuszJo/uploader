const router = require('express').Router()

const { sendSignup, handleSignup } = require('../controllers/auth.controller')

router.get('/signup', sendSignup)

router.post('/signup', handleSignup)

module.exports = router