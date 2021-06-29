const repositoriesUser = require('../repositories/user');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {JWT_ACCESS_KEY, JWT_REFRESH_KEY} = require('../config');
const customError = require('../src/utils/customErorrs');
const {getBoundaryValues} = require('../src/utils/utilFunctions')

const generateRefToken = (id, key, time) => {
    const payload = {
        id: id
    }
    return jwt.sign(payload, key, {expiresIn: time} )
}

exports.login = async (nickname, password) => {

    const user = await repositoriesUser.getUserByField('nickname', nickname);

    if (!user) {
        throw new customError.BadRequestError(`Check your email or password`);
    }

    const match = await bcrypt.compare(password, user.get('password'));

    if (!match) {
        throw new customError.BadRequestError(`Check your email or password`);
    }

    const serializedUser = user.serialize();


    const accessToken = jwt.sign(serializedUser, JWT_ACCESS_KEY, {expiresIn: 60 * 30} );
    const refreshToken = generateRefToken(serializedUser, JWT_REFRESH_KEY, '30d');

    user.set('refresh_token', refreshToken);
    user.save();

    return {
        accessToken,
        refreshToken
    }
}

exports.signUp = async (nickname, password, confPass) => {

    if (password !== confPass) {
        throw new customError.BadRequestError('password and confirm password are different');
    }

    const candidate = await repositoriesUser.getUserByField('nickname', nickname);

    if (candidate) {
        throw new customError.BadRequestError(`It's nickname already selected`);
    }

    const hash = await bcrypt.hash(password, 10);

    const createdUser = await repositoriesUser.createUser({
        nickname: nickname,
        password: hash,
    })
    const serializedUser = createdUser.serialize();

    const accessToken = jwt.sign(serializedUser, JWT_ACCESS_KEY, {expiresIn: 60 * 30} );
    const refreshToken = generateRefToken(serializedUser.id, JWT_REFRESH_KEY, '30d');

    createdUser.set('refresh_token', refreshToken);
    createdUser.save();

    return {
        accessToken,
        refreshToken
    };
}

exports.renewalToken = async (id, token) =>{
    const candidate = await repositoriesUser.getUserByField('id', id);
    const serializedCandidate = candidate.serialize();

    if (!serializedCandidate.refreshToken === token) {
        throw new customError.BadToken(`you should re-login`);
    }

    const accessToken = jwt.sign(serializedCandidate, JWT_ACCESS_KEY, {expiresIn: 60 * 30} );
    const refreshToken = generateRefToken(serializedCandidate.id, JWT_REFRESH_KEY, '30d');

    candidate.set('refresh_token', refreshToken);
    candidate.save();

    return {
        accessToken,
        refreshToken
    }
}

exports.create = async (nickname, password, confPass) => {

    if (password !== confPass) {
        throw new customError.BadRequestError('password and confirm password are different');
    }

    const candidate = await repositoriesUser.getUserByField('nickname', nickname);

    if (candidate) {
        throw new customError.BadRequestError(`It's nickname already selected`);
    }

    const hash = await bcrypt.hash(password, 10);

    await repositoriesUser.createUser({
        nickname: nickname,
        password: hash,
    })
    return nickname;
}

exports.edit = async (id, nickname, password, isAdmin) => {

    const user = await repositoriesUser.getUserByField('id', id);

    if(password){
        const hash = await bcrypt.hash(password, 10);
        user.set({
            nickname: nickname,
            password: hash,
            is_admin: isAdmin
        });
    }else{
        user.set({
            nickname: nickname,
            is_admin: isAdmin
        });
    }

    user.save();
    return nickname
}

exports.getPerPage = async (id) => {
    const quantity = 10;
    const {startValue, endValue} = getBoundaryValues(id, quantity);
    const users = await repositoriesUser.getPerPage(startValue, endValue);
    return users.serialize();
}

exports.getQuantity = () => {
    return repositoriesUser.getQuantity();
}
