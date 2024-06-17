const express = require('express')
const router = express.Router()

const authController = require('../controllers/auth-controller')

router.route('/login').all(authController.login)
router.route('/register').all(authController.register)

module.exports = router