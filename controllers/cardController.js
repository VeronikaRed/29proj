const cardService = require('../services/cardService');

exports.getPerPage = async (req, res, next) => {
    try {
        const {pageId} = req.params;
        const cards = await cardService.getPerPage(pageId);
        res.status(200).json(cards);
    } catch (e) {
        req.error = e;
        next()
    }
};

exports.getQuantity = async (req, res, next) => {
    try {
        const quantity = await cardService.getQuantity();
        res.status(200).json(quantity);
    } catch (e) {
        req.error = e;
        next()
    }
}

exports.card = async (req, res, next) => {

    try {
        const {id} = req.params;
        const card = await cardService.card(id);
        res.status(200).json(card);
    } catch (e) {
        req.error = e;
        next()
    }
};
//
exports.create = async (req, res, next) =>{

    try {
        const {name, status, species, type, gender, image, location_id, episode_id} = req.body;
        await cardService.create(name, status, species, type, gender, image, location_id, episode_id);
        res.status(200).json({message: 'done'});
    } catch (e) {
        console.log(e)
        req.error = e;
        next()
    }
}

exports.edit = async (req, res, next) => {

    try {
        const {id} = req.params;
        console.log('fh')
        const {name, status, species, type, gender, image, location_id, episode_id} = req.body;
        await cardService.edit(id, name, status, species, type, gender, image, location_id, episode_id);
        res.status(200).json({message: 'done'});
    } catch (e) {
        req.error = e;
        next()
    }
}


