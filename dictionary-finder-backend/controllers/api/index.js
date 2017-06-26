const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.wordlist);

module.exports = router;
