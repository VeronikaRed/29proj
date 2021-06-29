exports.up = function(knex) {
    return knex.schema.createTable('auctions', table => {
        table.increments('id');
        table.integer('seller_id').unsigned();
        table.foreign('seller_id').references('id').inTable('users');
        table.integer('initial_rate');
        table.integer('min_bet_step');
        table.time('duration_of _the_auction');
        table.time('min_auction_extension_time');
        table.integer('max_rate');
        table.integer('card_id').unsigned();
        table.foreign('card_id').references('id').inTable('user_card')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('auctions');
};