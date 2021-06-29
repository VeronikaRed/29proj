exports.up = function(knex) {
    return knex.schema.createTable('user_card', table => {
        table.increments('id');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('card_id').unsigned();
        table.foreign('card_id').references('id').inTable('cards');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('user_card');
};