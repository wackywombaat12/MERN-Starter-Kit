const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Logout endpoint
router.use(function(req, res, next) {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphY2suYm95bGVAYm95bGVzZml0bmVzcy5jb20uYXUiLCJmdWxsTmFtZSI6IkphY2sgQm95bGUiLCJfaWQiOiI1YTZlYTNhNWQ5Y2E0NjM1NTRlMzRlOWQiLCJpYXQiOjE1MTc5Njg3NDR9.7W1EoBeCfqGKi8zHROPmLscIpKM8okbSBM1172j_IYU";
    jwt.verify(token, 'RESTFULAPIs', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        req.decoded = decoded;    
        next();
      }
    });
});
  
module.exports = router