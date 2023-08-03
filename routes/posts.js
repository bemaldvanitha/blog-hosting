const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving posts' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const post = await Post.create({ title, content, author });
        res.json(post);
    } catch (err) {
        res.status(500).json({ error: 'Error creating post' });
    }
});

module.exports = router;
