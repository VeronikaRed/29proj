const db_bookshelf = require('../src/utils/db');

const Episode = require('./episodes');
const Location = require('./locations');

const Card = db_bookshelf.model('Card', {
    tableName: 'cards',
    episodes() {
        return this.belongsToMany(Episode, 'card_episode', 'card_id', 'episode_id')
    },
    locations() {
        return this.belongsTo(Location, 'location_id')
    },
    hasTimestamps: true

})

module.exports = Card;