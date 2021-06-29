exports.up = function(knex) {
    return knex.schema.createTable('balance', table => {
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users');
        table.integer('action')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('balance');
};