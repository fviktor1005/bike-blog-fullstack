const jwt = require('jsonwebtoken');
const util = require('util');
const {privateKey} = require("../config");
const {User} = require('../models');

const verify = util.promisify(jwt.verify);

module.exports = async function withUser(req, res, next) {
    const token = req.cookies.__session;
    if (!token) {
        res.status(401).send();
    }
    let decoded;
    let user;
    try {
        decoded = await verify(token, privateKey);
        const { login } = decoded;
        user = await User.findOne({login});
    }
    catch (e) {
        res.status(402).send(e)
    }
    req.user = user;
    next()
};