import express from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { Post } from './controller';
import Auth from '../auth/auth';

const auth = new Auth();
const router = express.Router();
const postController = new Post();

router.post('/post/', auth.decodedToken, uploadImage, postController.Save)
router.get('/post/', auth.decodedToken, postController.getAll);
router.get('/post/user/:id', auth.decodedToken, postController.getById);
router.delete('/post/:id', auth.decodedToken, postController.Delete);
router.put('/post/:id', auth.decodedToken, uploadImage, postController.Update);

module.exports = router;