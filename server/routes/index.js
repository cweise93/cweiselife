const { Router } = require('express');

const health = require('./health');
const contact = require('./contact');

const router = Router();

router.use('/health', health);
router.use('/contact', contact);

module.exports = router;
