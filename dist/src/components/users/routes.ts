import express  from 'express';
import { UserController } from './controller';

const router = express.Router();
const tryCatchResponse =require('./../../utils/tryCatchResponse');

router.get('/id/:id', tryCatchResponse(UserController.getById));
router.get('/email/:email', tryCatchResponse(UserController.getByEmail));
module.exports = router;