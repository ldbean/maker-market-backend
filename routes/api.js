const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

// users
router.get('/users', ctrl.users.index);

// posts
router.get('/posts', ctrl.posts.index);
router.get('/:username/posts', ctrl.posts.uIndex)
router.get('/posts/:postid', ctrl.posts.show);
router.post('/:username/posts', ctrl.posts.create);
router.put('/:username/posts/:postId', ctrl.posts.update);
router.delete('/:usename/posts/:postId', ctrl.posts.destroy);

module.exports = router;