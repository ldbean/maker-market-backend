const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');


// posts
router.get('/posts', ctrl.posts.index);
router.get('/posts/:id', ctrl.posts.show);
router.post('/posts', ctrl.posts.create);
router.put('/posts/:id', ctrl.posts.update);
router.delete('/posts/:id', ctrl.posts.destroy);

module.exports = router;