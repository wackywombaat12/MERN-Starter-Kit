const router = require('express').Router();

router.use('/api', require('../Middleware/auth.js'))
router.use('/api/user', require('../Controllers/User.js'))
router.use('/api/team', require('../Controllers/Team.js'))

module.exports = router;