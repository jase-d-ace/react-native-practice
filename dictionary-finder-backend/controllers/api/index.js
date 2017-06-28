const router = require('express').Router();
const controller = require('./controller');

router.post('/', controller.wordlist);
router.post('/synonyms', controller.synonyms)

module.exports = router;
