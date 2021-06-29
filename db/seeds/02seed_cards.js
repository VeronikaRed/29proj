const axios = require('axios');
const {URL} = require('../../config')

exports.seed = async function(knex) {

    await knex('cards').del()

    let characterUrl = URL + '/character';

    do {
        const cards = [];

        const {data} = await axios.get(characterUrl);
        const {results} = data;

        for (const key of results){
            const {name, status, species, type, gender, image, location} = key;

            const str = location.url;
            const index = str.lastIndexOf('/');
            const locationIndex = str.slice(index+1, str.length);

            cards.push({
                name: name,
                status: status,
                species: species,
                type: type,
                gender: gender,
                image: image,
                location_id: locationIndex || null,
                created_at: new Date(),
                updated_at: new Date()
            })
        }

        await knex('cards').insert(cards);
        characterUrl = data.info.next

    } while (characterUrl)
}
