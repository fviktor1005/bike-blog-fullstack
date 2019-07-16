const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    // author: ObjectId,
    login: {type: String, required: true},
    about: String,
    email: String,
    password: String,
});

const PostSchema = new Schema({
    title: String,
    text: String,
    createdAt: String,
    author: String,
    user: ObjectId,
    tags: Array,
    image: String,
},  {timestamps: true});

const User = mongoose.model('User', UserSchema);

const Post = mongoose.model('Post', PostSchema);

module.exports = { User, Post };