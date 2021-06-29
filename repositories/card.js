const Card = require('../models/card');

exports.getPerPage = async (startValue, endValue) => {

    return Card.query(function(qb) {
        qb.where('id', '>=', startValue).andWhere('id', '<=', endValue);
    }).fetchAll({withRelated: [{
        episodes: (qb) => qb.select('name'),
        locations: (qb) => qb.select('id', 'name')
    }]});

};

exports.getQuantity = () => {
    return Card.forge().count();
};

exports.getCard = (id) => {
    return Card.where({id: id}).fetch({withRelated: [{
        episodes: (qb) => qb.select('name'),
        locations: (qb) => qb.select('id', 'name')
    }]});
};

exports.create = (obj) => {
    return Card.forge(obj).save()
};
