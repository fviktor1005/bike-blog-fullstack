const express = require("express");
const mongoose = require('mongoose');

const {Post} = require('../models');
const withUser = require('../auth');

const ObjectId = mongoose.Types.ObjectId;

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res) => {
    const posts = await Post.find({});
    res.send(posts);
});

router.get('/tags', async (req, res) => {
    const tags = await Post.distinct("tags");
    res.send(tags);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    let posts;
    try {
        posts = await Post.aggregate([
            { $match : { _id: ObjectId(id) } },
            {
                $lookup: {
                    from: "users",
                    localField: "user",
                    foreignField: "_id",
                    as: "author",
                }
            },
            {
                $project: {
                    "author.password": 0
                }
            }
            ]
        );
    } catch (e) {
        console.error(e);
        return res.status(500).send(e)
    }
    res.send(posts);
});

router.get('/:from/:to', async (req, res) => {
    const {from, to} = req.params;
    let posts;
    let count;
    try {
        //posts = await Post.find().sort({createdAt: -1}).skip(+from).limit(+to - (+from));
        posts = await Post.aggregate([
                {
                    $lookup: {
                        from: "users",
                        localField: "user",
                        foreignField: "_id",
                        as: "author",
                    }
                },
                {
                    $project: {
                        "author.password": 0
                    }
                }
            ]
        ).sort({_id: -1}).skip(Number(from)).limit(to - from);
        count = await Post.count();
    } catch (e) {
        res.send(e)
    }
    res.send({posts, count});
});

router.put('/:id', withUser, async (req, res) => {
    const { id } = req.params;
    let result;
    try {
        result = await Post.findOneAndUpdate({_id: id}, {$set: {...req.body}});
    } catch (e) {
        res.status(500).send(e);
    }

    res.send({...result, ...req.body});
});

router.post('/', withUser, async (req, res) => {
    const {user} = req;
    const post = new Post({...req.body, user});
    let result;
    try {
        result = post.save();
    } catch (e) {
        res.status(500).send(e);
    }
    res.send(result);
});

module.exports = router;
