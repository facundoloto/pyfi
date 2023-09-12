import express from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { LoginController } from './controller';

const register = new LoginController();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express.Router();

router.post('/signup/', uploadImage, tryCatchResponse(register.signUp))
router.post('/login/', register.Login);
router.post('/signup/google/', register.signUpGoogle);
router.post('/login/google/', register.LoginByGoogle);
module.exports = router;