const router = require('express').Router();

router.use('/api/user', require('../Controllers/User.js'))

module.exports = router;