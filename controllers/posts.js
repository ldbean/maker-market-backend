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

const uIndex = async (req, res) => {
  try {
    const posts = await db.Post.find({authorId:req.params.username});
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    return res.json(posts);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const show = async (req, res) => {
  try {
    const post = await db.Post.findById(req.params.postId);
    if (!post) return res.status(404).json({error: 'No post found with that ID!'});
    return res.json(post);
  } catch (err) {
    return res.status(500).json(err);
  }
}

const create = (req, res) => {
  req.body.authorId = req.params.username
  db.Post.create(req.body, (err, newPost) => {
    if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
    db.User.find({username:req.params.username}, (err, foundUser) => {
      if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'});
      console.log(newPost, foundUser)
      foundUser[0].posts.push(newPost);
      foundUser[0].save((err, savedUser) => {
        if (err) return res.status(400).json({status: 400, error: 'Something went wrong, please try again'})
        res.json(newPost);
      });
    });
  });
};

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
  uIndex,
  show,
  create,
  update,
  destroy
}
