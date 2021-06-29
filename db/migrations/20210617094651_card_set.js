exports.up = function(knex) {
    return knex.schema.createTable('card_set', table => {
        table.integer('card_id').unsigned();
        table.foreign('card_id').references('id').inTable('cards');
        table.integer('set_id').unsigned();
        table.foreign('set_id').references('id').inTable('sets')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('card_set');
};