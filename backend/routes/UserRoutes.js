const router = require('express').Router()

//Middlewares
const verifyToken = require('../helpers/verify-token')
const { imageUpload } = require('../helpers/image-upload')

const UserController = require('../controllers/UserController')

router.get('/checkUser', UserController.checkUser)
router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/:id', UserController.getUserById)
router.patch('/edit/:id', verifyToken, imageUpload.single("image"), UserController.editUser)

module.exports = router


