exports.up = function(knex) {
    return knex.schema.createTable('set_user', table => {
        table.integer('set_id').unsigned();
        table.foreign('set_id').references('id').inTable('sets');
        table.integer('user_id').unsigned();
        table.foreign('user_id').references('id').inTable('users');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('set_user');
};
