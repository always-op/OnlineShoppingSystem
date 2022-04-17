const express = require('express')
const { singin, register, hello ,logout} = require('../Controllers/userController')
const router = express.Router()

router.route('/user/logout').get(logout)
router.route('/user/login').post(singin)
router.route('/user/register').post(register) 

router.route('/user').get(hello)

module.exports = router