const router = require('express').Router()

//Middlewares
const verifyToken = require('../helpers/verify-tokey')

const UserController = require('../controllers/UserController')
router.get('/checkUser', UserController.checkUser)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id', verifyToken, UserController.editUser)

module.exports = router


