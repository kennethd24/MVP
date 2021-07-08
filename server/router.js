const router = require('express').Router();
const dbHelpers = require('../db/dbHelpers');

router.post('/userFeed', dbHelpers.postUserFeed);

module.exports = router;
