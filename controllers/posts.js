const db = require('../models');

const index = async (req, res) => {
  try {
    const posts = await db.Post.find({});
    if (!posts) return res.status(404).json({error: 'No posts found!'});
    return res.json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const show = async (req, res) => {
  try {
    const post = await db.Post.findById(req.params.id);
    if (!post) return res.status(404).json({error: 'No post found with that ID!'});
    return res.json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const create = async (req, res) => {
  try {
    const newPost = await db.Post.create(req.body);
    if (!newPost) return res.status(404).json({error: 'Post could not be created!'});
    return res.json(newPost);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const update = async (req, res) => {
  console.log(req.body);
  try {
    const updatedPost = await db.Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPost) return res.status(404).json({error: 'Post could not be updated!'});
    return res.json(updatedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const destroy = async (req, res) => {
  try {
    const deletedPost = await db.Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({error: 'Post with that ID could not be found!'});
    return res.json(deletedPost);
  } catch (err) {
    return res.status(500).json(err);
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
}
