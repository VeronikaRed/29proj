exports.up = function(knex) {
    return knex.schema.createTable('deals', table => {
        table.increments('id');
        table.integer('seller_id').unsigned();
        table.foreign('seller_id').references('id').inTable('users');
        table.integer('buyer_id').unsigned();
        table.foreign('buyer_id').references('id').inTable('users');
        table.integer('card_user_id').unsigned();
        table.foreign('card_user_id').references('id').inTable('user_card');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('deals');
};
