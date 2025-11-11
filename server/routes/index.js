const { Router } = require('express');

const health = require('./health');
const contact = require('./contact');
const content = require('./content');

const router = Router();

router.use('/health', health);
router.use('/contact', contact);
router.use('/content', content);

module.exports = router;
