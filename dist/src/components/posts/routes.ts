import express from 'express';
import { uploadImage } from '../../services/aws/uploadImageServices';
import { Save, getById, getAll, Delete, Update } from './controller';

const tryCatchResponse = require('./../../utils/tryCatchResponse');
const router = express.Router();

router.post('/post/', uploadImage, tryCatchResponse(Save))
router.get('/post/', tryCatchResponse(getAll));
router.get('/post/:id', tryCatchResponse(getById));
router.delete('/post/:id',tryCatchResponse(Delete));
router.put('/post/:id', tryCatchResponse(Update));

module.exports = router;