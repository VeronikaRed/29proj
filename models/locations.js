const db_bookshelf = require('../src/utils/db');
const Card = require('./card')

const Location = db_bookshelf.model('Locations', {
    tableName: 'locations',
    cards() {
        return this.hasMany(Card)
    }
})

module.exports = Location;