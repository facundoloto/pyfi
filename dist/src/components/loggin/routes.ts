import express from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { LoginController } from './controller';

const register = new LoginController();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express.Router();

router.post('/signup/', uploadImage, tryCatchResponse(register.signUp))
router.post('/login/', tryCatchResponse(register.Login));
router.post('/signup/google/', tryCatchResponse(register.signUpGoogle));
module.exports = router;