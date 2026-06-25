
const DataSiswa = require('../models/DataSiswa');
const Post = require('../models/Post');

exports.home = (req, res) => {
  res.render('home', { title: 'Home Page' });
};

exports.posts = (req, res) => {
  const posts = Post.getAll();
  res.render('posts', { title: 'Posts', posts });
};

exports.detail = (req, res) => {
  const post = Post.getById(req.params.id);
  res.render('detail', { title: post.title, post });
};

exports.about = (req, res) => {
  res.render('about', { title: 'About' });
};

exports.profile=(req, res) => {
  res.render('profile', {title:"Profile", nama: "Laqsha Asri", nim:"241112227"})
}