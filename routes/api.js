const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

// users
router.get('/users', ctrl.users.index);

// posts
router.get('/posts', ctrl.posts.index);
router.get('/:username/', ctrl.posts.uIndex);
router.get('/:username/posts/:postId', ctrl.posts.show); 
router.post('/:username/posts', verifyToken, ctrl.posts.create);
router.put('/:username/posts/:postId', verifyToken, ctrl.posts.update);
router.delete('/:username/posts/:postId', verifyToken, ctrl.posts.destroy);

// images 
router.get('/upload', verifyToken, ctrl.images.index);
router.get('/upload/:img', verifyToken, ctrl.images.show);
router.post('/upload', verifyToken, ctrl.images.create);




module.exports = router;