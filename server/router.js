const router = require('express').Router();
const dbHelpers = require('../db/dbHelpers');

router.post('/userFeed', dbHelpers.postUserFeed);

router.post('/users', dbHelpers.postUsers);

router.get('/users', dbHelpers.getUsers);

module.exports = router;
