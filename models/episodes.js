const db_bookshelf = require('../src/utils/db');
const Card = require('./card')

const Episode = db_bookshelf.model('Episode', {
    tableName: 'episodes',
    cards() {
        return this.belongsToMany(Card, 'card_episode', 'episode_id', 'card_id')
    }
})

module.exports = Episode;