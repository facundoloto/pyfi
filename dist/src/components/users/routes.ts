import express from 'express';
import { UserController } from './controller';

const router = express.Router();
const tryCatchResponse = require('./../../utils/tryCatchResponse');
const userController = new UserController();

router.get('/id/:id', tryCatchResponse(userController.getById));
router.get('/email/:email', tryCatchResponse(userController.getByEmail));
module.exports = router;