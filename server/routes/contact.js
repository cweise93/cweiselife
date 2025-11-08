const { Router } = require('express');

const router = Router();

router.post('/', async (req, res, next) => {
  try {
    const payload = req.body ?? {};

    if (!payload.email || !payload.name || !payload.message) {
      return res.status(400).json({
        status: 'error',
        message: 'name, email, and message are required'
      });
    }

    // TODO: Persist message into Azure SQL and kick off AI workflow when available.

    res.status(202).json({
      status: 'accepted',
      message: 'Contact request accepted for processing',
      receivedAt: new Date().toISOString()
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
