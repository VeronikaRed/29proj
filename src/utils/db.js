const knex = require('knex');
const bookshelf = require('bookshelf')
const knexfile = require('../../knexfile');
const db = knex(knexfile.development);
const db_bookshelf = bookshelf(db)

module.exports = db_bookshelf;