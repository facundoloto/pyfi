const express = require('express');
const router = express.Router();
//const users = require('../components/users/routes');
const login = require('../components/loggin/routes');
const user = require('../components/users/routes')
const post = require('../components/posts/routes')

router.use('/user/', user);
router.use('/register/', login);
router.use('/home/', post);

module.exports = router;