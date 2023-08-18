import express from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { Post } from './controller';

const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express.Router();
const postController = new Post();

router.post('/post/', uploadImage, tryCatchResponse(postController.Save))
router.get('/post/', tryCatchResponse(postController.getAll));
router.get('/post/user/:id', tryCatchResponse(postController.getById));
router.delete('/post/:id', tryCatchResponse(postController.Delete));
router.put('/post/:id', tryCatchResponse(postController.Update));

module.exports = router;