const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String, 
    content: String,
    image: String,
    authorId: String
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;