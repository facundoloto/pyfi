import express  from 'express';
import { UserController } from './controller';
//import { uploadImage } from './../../services/aws/uploadImageServices';
//const tryCatchResponse =require('./../../utils/tryCatchResponse');

const router = express.Router();

router.get('/:id', UserController.getById);

module.exports = router;