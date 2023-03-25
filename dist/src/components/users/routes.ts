import express  from 'express';
import { UserController } from './controller';
import { uploadImage } from './../../services/aws/uploadImageServices';

const router = express.Router();

router.get('/:id', UserController.getById);
router.post('/create', uploadImage, UserController.create);

module.exports = router;