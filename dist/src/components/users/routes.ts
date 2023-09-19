import express from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { UserController } from './controller';

const router = express.Router();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const userController = new UserController();

router.get('/id/:id', tryCatchResponse(userController.getById));
router.get('/email/:email', tryCatchResponse(userController.getByEmail));
router.put("/user/:id", uploadImage, tryCatchResponse(userController.update));
module.exports = router;