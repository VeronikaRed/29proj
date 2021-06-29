const axios = require('axios');
const {URL} = require('../../config')

exports.seed = async function(knex) {

    await knex('locations').del()

    let locationUrl = URL + '/location';

    do {
        const locations = [];

        const {data} = await axios.get(locationUrl);
        const {results} = data;

        results.forEach(({name, type, dimension}) => {

            locations.push({
                name: name,
                type: type,
                dimension: dimension,
                created_at: new Date(),
                updated_at: new Date()
            })
        })

        await knex('locations').insert(locations);
        locationUrl = data.info.next

    } while (locationUrl)
}
