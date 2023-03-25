const express = require('express');
const router = express.Router();
const users = require('../components/users/routes');


router.use('/user/', users);

module.exports = router;