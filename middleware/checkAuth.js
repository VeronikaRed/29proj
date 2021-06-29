const jwt = require('jsonwebtoken');
const {JWT_ACCESS_KEY, JWT_REFRESH_KEY} = require('../config');
const errors = require('../src/utils/customErorrs');

const verifyToken = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            throw new errors.BadToken(`User is not logged in`);
        }
        req.user = jwt.verify(token, JWT_ACCESS_KEY);
        next()
    } catch (e) {
        res.status(401).json({message: e.message});
    }
};

const verifyRefreshToken = function (req, res, next) {
    const token = req.body.token
    try {
        const decodedData = jwt.verify(token, JWT_REFRESH_KEY);
        req.userId = {
            id: decodedData.id,
            token
        }
        next()
    } catch (e) {
        res.status(401).json({message: e.message});
    }
};

module.exports = {
    verifyToken,
    verifyRefreshToken
}