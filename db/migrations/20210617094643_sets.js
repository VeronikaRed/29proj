exports.up = function(knex) {
    return knex.schema.createTable('sets', table => {
        table.increments('id');
        table.integer('award');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('sets');
};
