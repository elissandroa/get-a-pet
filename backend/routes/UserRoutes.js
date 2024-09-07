const router = require('express').Router()

const UserController = require('../controllers/UserController')
router.get('/checkUser', UserController.checkUser)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/:id', UserController.getUserById)

module.exports = router


