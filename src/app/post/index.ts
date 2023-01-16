import { PostController } from "./post.controller";
const express = require('express');
const route = express.Router();

const postctr = new PostController()

route.post('/post',postctr.addPost),

route.get('/posts',postctr.getPosts),

route.get('/post/:id',postctr.getPost)

module.exports = route