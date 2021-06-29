const userService = require('../services/userService');

exports.login = async (req, res, next) => {
    try {
        const {nickname, password} = req.body;
        const tokens = await userService.login(nickname, password);
        res.status(200).json(tokens);
    } catch (e) {
        req.error = e;
        next()
    }
};

exports.signUp = async (req, res, next) => {

    try {
        const {nickname, password, confPass} = req.body;
        const tokens = await userService.signUp(nickname, password, confPass);
        res.status(200).json(tokens);
    } catch (e) {
        req.error = e;
        next()
    }
};

exports.refreshToken = async (req, res, next) =>{
    try {
        const {id, token} = req.userId;
        const tokens = await userService.renewalToken(id, token);
        res.status(200).json(tokens);
    } catch (e) {
        req.error = e;
        next()
    }
}

exports.create = async (req, res, next) => {
    try {
        const {nickname, password, confPass} = req.body;
        const userName = await userService.create(nickname, password, confPass);
        res.status(200).json(userName);
    } catch (e) {
        req.error = e;
        next()
    }
};

exports.edit = async (req, res, next) => {

    try {
        const {id} = req.params
        const {nickname, password, isAdmin} = req.body;
        const userName = await userService.edit(id, nickname, password, isAdmin);
        res.status(200).json(userName);
    } catch (e) {
        req.error = e;
        next()
    }
}

exports.getPerPage = async (req, res, next) => {
    try {
        const {pageId} = req.params;
        const users = await userService.getPerPage(pageId);
        res.status(200).json(users);
    } catch (e) {
        req.error = e;
        next()
    }
}


exports.getQuantity = async (req, res, next) => {
    try {
        const quantity = await userService.getQuantity();
        res.status(200).json(quantity);
    } catch (e) {
        req.error = e;
        next()
    }
}