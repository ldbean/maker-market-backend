const mongoose = require('mongoose');
const Post = require('./Post');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  // email: String,
  password: String,
  // skills: [],
  // tagline: String,
  // isAMaker: Boolean
  posts:[Post.schema]

}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;