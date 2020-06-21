const express = require ('express');
const { AuthController } = require ('../controllers')
const { auth } = require ('../helpers/Auth');

const router = express.Router()

router.post('/register', AuthController.register);
router.get('/verified', auth, AuthController.verified);
router.post('/sendemailverified', AuthController.sendEmailVerified)
router.get('/login', AuthController.login)
router.get('/keeplogin', auth, AuthController.keepLogin)



module.exports = router