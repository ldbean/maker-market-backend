const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');


// posts
router.get('/posts', ctrl.posts.index);
router.get('/posts/:id', verifyToken, ctrl.posts.show);
router.post('/posts', verifyToken, ctrl.posts.create);
router.put('/posts/:id', verifyToken, ctrl.posts.update);
router.delete('/posts/:id', verifyToken, ctrl.posts.destroy);

module.exports = router;