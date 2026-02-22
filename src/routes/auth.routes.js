const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth.controller')

// todo : jelasin apa yang belum beres

router.post('/login', authController.login)
router.post('/logout', authController.logout)

module.exports = router