const repositoriesCard = require('../repositories/card');
const jwt = require("jsonwebtoken");
const {JWT_ACCESS_KEY, JWT_REFRESH_KEY} = require('../config');
const customError = require('../src/utils/customErorrs');
const {getBoundaryValues} = require('../src/utils/utilFunctions');

exports.getPerPage = async (id) => {
    const quantity = 15;
    const {startValue, endValue} = getBoundaryValues(id, quantity);
    const cards = await repositoriesCard.getPerPage(startValue, endValue);
    return cards.serialize();
}

exports.getQuantity = () => {
    return repositoriesCard.getQuantity();
}

exports.card = async (id) => {
    const card = await repositoriesCard.getCard(id);
    return card.serialize();
}

exports.create = async (name, status, species, type, gender, image, location_id, episode_id) => {

    const card = await repositoriesCard.create({
        name: name,
        status: status,
        species: species,
        type: type,
        gender: gender,
        image: image,
        location_id: location_id
    })
    
    await card.episodes().attach(episode_id);
}

exports.edit = async (id, name, status, species, type, gender, image, location_id, episodes) => {

    const card = await repositoriesCard.getCard(id);
    card.set({
        name: name,
        status: status,
        species: species,
        type: type,
        gender: gender,
        image: image,
        location_id: location_id,
        updated_at: new Date()
    })
    card.save();

    await card.episodes().detach();
    await card.episodes().attach(episodes);

}