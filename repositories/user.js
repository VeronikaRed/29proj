const User = require('../models/user');

exports.getUserByField = (field, value) =>{
    return User.where({[field]: value}).fetch({
        require: false,
    });
};

exports.createUser = (obj) =>{
    return User.forge(obj).save();
};

exports.getPerPage = (startValue, endValue) => {
    return User.query(function(qb) {
        qb.where('id', '>=', startValue).andWhere('id', '<=', endValue);
    }).fetchAll();
};

exports.getQuantity = () => {
    return User.forge().count();
};