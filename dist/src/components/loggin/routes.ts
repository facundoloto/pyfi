import express  from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { Login, signUp, signUpGoogle } from './controller';

const tryCatchResponse =require('./../../utils/tryCatchResponse');
const router = express.Router();

router.post('/signup/', uploadImage, tryCatchResponse(signUp))
router.post('/login/', tryCatchResponse(Login));
router.post('/signup/google/', tryCatchResponse(signUpGoogle));
module.exports = router;