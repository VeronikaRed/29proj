exports.up = function(knex) {
    return knex.schema.createTable('card_episode', table => {
        table.increments('id');
        table.integer('card_id').unsigned();
        table.foreign('card_id').references('id').inTable('cards');
        table.integer('episode_id').unsigned();
        table.foreign('episode_id').references('id').inTable('episodes');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('card_episode');
};
