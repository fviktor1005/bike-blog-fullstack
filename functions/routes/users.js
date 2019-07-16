const express = require("express");
const bcrypt = require("bcrypt");
const {check, validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');
const util = require('util');

const sign = util.promisify(jwt.sign);

const {User} = require('../models');
const {privateKey} = require("../config");
const withUser = require("../auth");

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {

    res.send('to gel all users');
});

router.get('/profile', withUser, (req, res) => {
   res.send(req.user);
});

router.post('/profile', withUser, async (req, res) => {
    const {user} = req;
    if (req.body.password) {
        user.password = await bcrypt.hash(user.password, 10);
    }
    user.email = req.body.email;
    user.about = req.body.about;

    const result = await user.save();
    res.send(result && 'Profile updated succesfully')
});

router.post('/', async (req, res) => {
    const existingUser = await User.findOne({login: req.body.login});
    if (existingUser) {
        return res.status(500).send({login: 'Login is taken'})
    }
    const user = new User(req.body);
    user.password = await bcrypt.hash(user.password, 10);
    const result = await user.save();
    res.send(result)
});

router.post('/login', [
    check('login').not().isEmpty(),
    check('password').not().isEmpty(),
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({errors: errors.array()});
    }

    const user = await User.findOne({login: req.body.login});
    if (!user) {
        return res.status(401).send({login: 'User not found'})
    }
    const result = await bcrypt.compare(req.body.password, user.password);
    if (!result) {
        return res.status(402).send({password: 'Wrong password'})
    }

    let token;
    const hour = 60 * 60 * 1000;
    try {
        token = await sign({login: user.login}, privateKey,  { expiresIn: hour });
        //res.setHeader('Cache-Control', 'private');
        res.cookie("__session", token, { secure: true , maxAge: hour });
        res.send(token);
    } catch (e) {
        res.status(500).send(e)
    }
});

module.exports = router;
