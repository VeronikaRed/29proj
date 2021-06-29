const axios = require('axios');
const {URL} = require('../../config')

exports.seed = async function(knex) {

    await knex('episodes').del();
    await knex('card_episode').del();

    let episodeUrl = URL + '/episode';

    do {
        let episodes = [];
        let episodesCards = [];

        const {data} = await axios.get(episodeUrl);
        const {results} = data;

        for (const key of results){
            const {name, id, characters} = key;

            for (const item of characters){

                const index = item.lastIndexOf('/');
                const charactersIndex = item.slice(index+1, item.length);

                episodesCards.push({
                    episode_id: id, card_id: charactersIndex
                })
            }

            episodes.push({
                name: name,
                created_at: new Date(),
                updated_at: new Date()
            });
        }

        await knex('episodes').insert(episodes);
        await knex('card_episode').insert(episodesCards);

        episodeUrl = data.info.next

    } while (episodeUrl)
}
