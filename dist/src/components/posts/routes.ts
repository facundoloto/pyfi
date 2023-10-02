import express, { Request, Response } from 'express';
import multer from "multer";

import { uploadImage } from '../../services/aws/uploadImageServices';
import { Post } from './controller';
import Auth from '../auth/auth';

const auth = new Auth();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express.Router();
const postController = new Post();

router.post('/post/', auth.decodedToken, uploadImage, (req: Request, res: Response) => {
    if (req.file instanceof multer) {
        // File is valid; you can now process it
        // You can access the file data using req.file
        res.json({ message: 'File uploaded successfully' });
    } else {
        // Invalid file; handle the error
        res.status(400).json({ error: 'Invalid file' });
    }
}, tryCatchResponse(postController.Save))
router.get('/post/', auth.decodedToken, tryCatchResponse(postController.getAll));
router.get('/post/user/:id', auth.decodedToken, tryCatchResponse(postController.getById));
router.delete('/post/:id', auth.decodedToken, tryCatchResponse(postController.Delete));
router.put('/post/:id', auth.decodedToken, tryCatchResponse(postController.Update));

module.exports = router;